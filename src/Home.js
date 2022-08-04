import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './app.css';
import { Link } from "react-router-dom";


export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    let body = null;
    if (this.props.authState?.isAuthenticated) {
      body = (
        <div className="Buttons">
          <button className="button-56" onClick={this.logout}>Logout</button>
          {/* Replace me with your root component. */}
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button className="button-56" onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">

      
        <div className="main">
          <p id="hometext"> Login  </p>
          <p id="next">to view your personalized page.</p>
        </div>
        {body}
        <Link to="/profile">
          <button className="button-56" type="button">
            View Secret Page
          </button>
        </Link>
      </div>
    );
  }
});
