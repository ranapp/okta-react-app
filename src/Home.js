import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './app.css';
import './index.css';

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
          <button onClick={this.logout}>Logout</button>
          {/* Replace me with your root component. */}
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
        <div className="titletext">
        <div className="square"></div>
        <div className="main">
        <p id="hometext"> Welcome  </p>
        <p id="next">to my homepage.</p>
        </div>
        </div>
          {body}
        </header>
      </div>
    );
  }
});
