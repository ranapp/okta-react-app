import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from "react-router-dom";
import './app.css';



const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      setUserInfo(authState.idToken.claims);
      // You can also get user information from the `/userinfo` endpoint
      /*oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });*/
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div className='err'>
        <p>You are not authorized to view this page.</p>
        <Link to="/">
          <button className="button-56" type="button">
            Take me back!
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <hr id="stripe" />


      <div className="table">
        <img src="https://awspracticebucketarya.s3.us-west-1.amazonaws.com/IMG_3611.JPG" alt="headerimg"></img>


        <p id="p1"> Welcome, {Object.entries(userInfo)[1][1]}</p>
        <p id="p2"> Your email is {Object.entries(userInfo)[2][1]}</p>
        <p id="p3"> and your preferred username is {Object.entries(userInfo)[12][1]}</p>

        <p id="p4">If you would like to change this information, please visit developer.okta.com.</p>
        <Link to="/">
          <button className="button-56" id="profile" type="button">
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Profile;
