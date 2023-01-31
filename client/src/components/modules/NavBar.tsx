import React from "react";
import { Link } from "@reach/router";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import "./NavBar.css";
import { RouteComponentProps, Router } from "@reach/router";
import EventDashboard from "../pages/EventDashboard";
import Invite from "../pages/Invite";

type Props = RouteComponentProps & {
  userId?: string;
  handleLogin: (credentialResponse: CredentialResponse) => void;
  handleLogout: () => void;
};

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "222848081969-93l6425mo8lhnqo2t9c8cecfa4058hvc.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages.
 */
const NavBar = (props: Props) => {
  return (
    <nav className="NavBar-container">
      <Link to="/" className="NavBar-title u-bold u-inlineBlock">
        Gatherify
      </Link>
      <div className="NavBar-linkContainer u-inlineBlock">
        <div className="u-inlineBlock">
          <Router> 
            <Invite path="/invite"/>
            <EventDashboard path ="/event"/>
          </Router>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {props.userId ? (
              <button
                className="NavBar-logout"
                onClick={() => {
                  googleLogout();
                  props.handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              <GoogleLogin
                onSuccess={props.handleLogin}
                onError={() => console.log("Error Logging in")}
              />
            )}
          </GoogleOAuthProvider>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
