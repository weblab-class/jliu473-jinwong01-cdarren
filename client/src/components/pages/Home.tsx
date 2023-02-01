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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [id, setId] = useState("");

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
    const body = { name: name, date: date, location: location, time: time, description: description };
    event.preventDefault();
    post("/api/event", body).then((comment) => {
      console.log(comment);
      console.log(comment._id);
      navigate(`/event/${comment._id}`);
      // setId(comment._id);
    });
  };
  //autocomplete location input field
  // useEffect(() => {
  //   const autocompleteService = new window.google.maps.places.AutocompleteService();
  //   autocompleteService.getPlacePredictions(
  //     { input: location },
  //     (predictions, status) => {
  //       if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
  //         return;
  //       }
  //       setPlaces(predictions.map((prediction) => prediction.description));
  //     }
  //   );
  // }, [location]);

  // //call when mounted
  // useEffect(() => {
  //   document.title = "Event";
  // }, []);

  return (
    <div>
      <div>
        <h1 className="title"> Let's plan your gathering!</h1>
        <h4 className="input-description"> Event Name</h4>
        <input
          className="input-box"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <h4 className="input-description">Date</h4>
        {/* check if date is set or not, assume set for now */}
        <input
          className="input-box"
          type="date"
          placeholder="input Date"
          value={date}
          onChange={handleChangeDate}
        ></input>
        <h4 className="input-description">Time </h4>
        <input
          className="input-box"
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleChangeTime}
        />
        <h4 className="input-description">Location </h4>
        {/* google maps api */}
        <input
          className="input-box"
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleChangeLocation}
        />
        <h4 className="input-description">Description</h4>
        <input
          className="input-box"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleChangeDescription}
        />
        {/* logic so it throws error if no event name */}
        <button type="submit" value="Create Event" onClick={handleSubmit}>
          Submit
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
