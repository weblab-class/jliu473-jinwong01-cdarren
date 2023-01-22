import React from "react";
import { Link } from "@reach/router";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-bold">Gatherify</div>
    </nav>
  );
};

export default NavBar;
