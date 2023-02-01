import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import { useState, useEffect } from "react";
import EventDashboard from "./EventDashboard";

import "./Home.css";
import { RouteComponentProps, Link, Router, navigate } from "@reach/router";
import { setConstantValue } from "typescript";
import { post } from "../../utilities";
import "./About.css";

const About  = (props) => {


    return (
        <div className="about-container">
            <h1 className="title">About Gatherify</h1>
            <p className="about-text">Gatherify is an online platform for creating and managing events. With a focus on ease of use and user experience, Gatherify makes it simple to invite people to your events and keep track of RSVPs in real-time.</p>
            <p className="about-text">Our platform provides a range of features designed to streamline the event creation process, including customizable invitations, detailed event scheduling, and real-time updates on who's attending.</p>
            <p className="about-text">At Gatherify, we are passionate about bringing people together and helping to create unforgettable experiences. Whether you're planning a family gathering, a corporate conference, or a charity event, Gatherify has the tools you need to make your event a success.</p>
        </div>
    );
};

export default About;