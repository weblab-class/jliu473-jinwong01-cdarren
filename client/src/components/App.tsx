import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import { CredentialResponse } from "@react-oauth/google";

import { get, post } from "../utilities";
import NotFound from "./pages/NotFound";
import EventDashboard from "./pages/EventDashboard";
import Home from "./pages/Home";
import EventDisplay from "./pages/EventDisplay";
import EventChange from "./pages/EventChange";
import About from "./pages/About";

import { socket } from "../client-socket";
import User from "../../../shared/User";
import "../utilities.css";

import NavBar from "./modules/NavBar";
import Invite from "./pages/Invite";

import Test from "./pages/Test";

const App = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    get("/api/whoami")
      .then((user: User) => {
        if (user._id) {
          // TRhey are registed in the database and currently logged in.
          setUserId(user._id);
        }
      })
      .then(() =>
        socket.on("connect", () => {
          post("/api/initsocket", { socketid: socket.id });
        })
      );
  }, []);

  const handleLogin = (credentialResponse: CredentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken as string) as { name: string; email: string };
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  // NOTE:
  // All the pages need to have the props extended via RouteComponentProps for @reach/router to work properly. Please use the Skeleton as an example.
  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <Router>
        <Home path="/" userId={userId} />
        <Invite path="/invite/:id" />
        <EventDisplay path="/event/:id" />
        <EventChange path="/editevent/:id"/>
        <Test path="/test" />
        {/* <About path="/about"/> */}
        <NotFound default={true} />
      </Router>
    </>
  );
};

export default App;
