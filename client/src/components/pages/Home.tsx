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
import { RouteComponentProps, Link, Router, navigate, } from "@reach/router";
import { setConstantValue } from "typescript";
import { post } from "../../utilities";

// REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "222848081969-93l6425mo8lhnqo2t9c8cecfa4058hvc.apps.googleusercontent.com";

type Props = RouteComponentProps & {
  userId?: string,
};
const Home = (props: Props) => {
  //states
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const [id, setId] = useState("");

  //called whenever user type in name input box
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  }

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    const body = {name:name, location: location, time: time, description: description};
    event.preventDefault();
    post("/api/event", body).then((comment) => {
      console.log(comment);
      console.log(comment._id);
      navigate(`/eventDashboard/${comment._id}`);
      setId(comment._id);
      console.log(id);
    });
    // setName("");
    // 
  }


  // //call when mounted
  // useEffect(() => {
  //   document.title = "Event";
  // }, []);

  return (
    <div>
      <div>
        <h1> Let's plan your gathering!</h1>
        <h4> Name * </h4>
        <input type = "text" placeholder = "input Name" value ={name} onChange={handleChangeName}/>
        <h4>Location * </h4>
        <input type = "text" placeholder = "input Location" value ={location} onChange={handleChangeLocation}/>
        <h4>Time * </h4>
        <input type = "text" placeholder = "input Time" value ={time} onChange={handleChangeTime}/>
        <h4>Description</h4>
        <input type = "text" placeholder = "input Description" value ={description} onChange={handleChangeDescription}/>
        <h4>Date</h4> 
        <h4> Type</h4>
        <button type = "submit" value = "Create Event" onClick = {handleSubmit}>Submit</button>
        {/* <h4> Guests</h4> */}
      </div>

      {/* <div>
        <span> insert name</span>
        <span> email</span>
        <p> Add Guest</p>
        <p>Generate event Link</p>
        <p>Go to "url.com/eventDashboard/63d04f176b4498a42c9606f1 to test Event Dashboard page</p>
        <p>Go to "url.com/invite/63d04f176b4498a42c9606f1 to test Invite page</p>
      </div> */}
    </div>
  );
};

export default Home;
