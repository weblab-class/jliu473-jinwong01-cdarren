import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./EventChange.css";
import { get, post } from "../../utilities";
import CopyLinkButton from "../modules/CopyLinkButton";

type props = RouteComponentProps & {
  id: String;
};
const EventChange = (props) => {
  //states
  const [name, setName] = useState(props.id.name);
  const [date, setDate] = useState(props.id.date);
  const [time, setTime] = useState(props.id.time);
  const [location, setLocation] = useState(props.id.location);
  const [description, setDescription] = useState(props.id.description);


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

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    // if there's no name, make site reload
    if (!name){
      alert("Event Name is required");
      return;
    }

    const body = {name:name, location: location, time: time, description: description};
    event.preventDefault();
    post("/change/" + props.id, body).then((comment) => {
      console.log("Event updated!");
    });
  }

  return (
    <>
      <div>
        <h1 className="Event-title"> {name}</h1>
      </div>
      {/* Event Details */}
      <div className="flex">
        <div> Event Change</div>
        <input type = "text" placeholder = {props.id.name} value ={name} onChange={handleChangeName} required/>
        <div className="Event-content"> Event Date: {date}</div>
        <input type = "date" placeholder = {props.id.date}value = {date} onChange = {handleChangeDate}></input>
        <div className="Event-content">Event Time: </div>
        <input type = "time" placeholder = {props.id.time} value ={time} onChange={handleChangeTime}/>
        <div className="Event-content">Event Location: </div>
        <input type = "text" placeholder = {props.id.location} value ={location} onChange={handleChangeLocation}/>
        <div className="Event-content">Event Description: </div>
        <input type = "text" placeholder = {props.id.description} value ={description} onChange={handleChangeDescription}/>
        <button type = "submit" value = "Change Event" onClick = {handleSubmit}>Change</button>
      </div>

      {/* Invite Link */}
      <div> Here is your invite link</div>
      <div> gatherify.herokuapp.com/invite/{props.id}</div>
      <CopyLinkButton link = "gatherify.herokuapp.com/invite/" eventId = {props.id}></CopyLinkButton>

    </>
  );
};

export default EventChange;
