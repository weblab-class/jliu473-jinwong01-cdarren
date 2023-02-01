import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./EventDashboard.css";
import { get, post } from "../../utilities";
import CopyLinkButton from "../modules/CopyLinkButton";
import "./EventChange";

type Dashboard = RouteComponentProps & {
  id: String;
};
const EventDashboard = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [currentComponent, setCurrentComponent] = useState("EventDashboard");

  useEffect(() => {
    get("/api/events", { id: props.id }).then((event) => {
      setName(event.name);
      setDate(event.date);
      setTime(event.time);
      setLocation(event.location);
      setDescription(event.description);
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="Event-title"> {name}</h1>
      </div>
      {/* Event Details
      <div className="flex">
        <div className="Event-content"> Event Date: {date}</div>
        <div className="Event-content">Event Time: {time}</div>
        <div className="Event-content">Event Location: {location}</div>
        <div className="Event-content">Event Description: {description}</div>
        <div className="Event-content">"Guests Attending:"</div>
      
      </div> */}

      {/* Invite Link
      <div> Here is your invite link</div>
      <div> gatherify.herokuapp.com/invite/{props.id}</div>
      <CopyLinkButton link = "gatherify.herokuapp.com/invite/" eventId = {props.id}></CopyLinkButton> */}

    </>
  );
};

export default EventDashboard;
