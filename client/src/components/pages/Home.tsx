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

// REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "222848081969-93l6425mo8lhnqo2t9c8cecfa4058hvc.apps.googleusercontent.com";

type Props = RouteComponentProps & {
  userId?: string;
};
const Home = (props: Props) => {
  //states
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date(2022, 12, 12));
  const [dateChanged, setDateChanged] = useState(false);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  //called whenever user type in name input box
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
    setDateChanged(true);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    // if there's no name, make site reload
    if (!name) {
      alert("Event Name is required");
      return;
    }
    if (!props.userId){
      alert("Please sign in!");
      return;
    }
    let body;
    if (dateChanged){
      body = { name: name, date: date, location: location, time: time, description: description };
    }
    else{
      body = { name: name, location: location, time: time, description: description };
    }
    event.preventDefault();
    post("/api/event", body).then((comment) => {
      navigate(`/event/${comment._id}`);
    });
  };

  //call when mounted
  useEffect(() => {
    document.title = "Event";
  }, []);

  return (
    <div>
      <div className = "Event-Container">
        <h1 className="Title"> Let's plan your gathering!</h1>
        <h4 className="Input-description"> Event Name *</h4>
        <input
          className="Input-box"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <h4 className="Input-description">Date</h4>
        {/* check if date is set or not, assume set for now */}
        <input
          className="Input-box"
          type="date"
          placeholder="input Date"
          value={date.toString()}
          onChange={handleChangeDate}
        ></input>
        <h4 className="Input-description">Time </h4>
        <input
          className="Input-box"
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleChangeTime}
        />
        <h4 className="Input-description">Location </h4>
        {/* google maps api */}
        <input
          className="Input-box"
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleChangeLocation}
        />
        <h4 className="Input-description">Description</h4>
        <input
          className="Input-box"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleChangeDescription}
        />
        {/* logic so it throws error if no event name */}

        <button
          className="Create-event-button"
          type="submit"
          value="Create Event"
          onClick={handleSubmit}
        >
          Create Event
        </button>
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
