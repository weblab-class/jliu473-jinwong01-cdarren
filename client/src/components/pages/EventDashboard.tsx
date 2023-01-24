import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import "./EventDashboard.css";
import { get, post } from "../../utilities";

type Dashboard = RouteComponentProps & {
  id: String;
};
const EventDashboard = (Dashboard) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  useEffect(() => {
    get("/api/events", { id: Dashboard.id }).then((event) => {
      setEventName(event.name);
      setEventDescription(event.description);
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="Event-title"> {eventName} Event Name </h1>
      </div>

      <div className="flex">
        <div className="Event-content"> "Event Location:"</div>
        <div className="Event-content">"Event Time:"</div>
        <div className="Event-content">"Guests Attending:"</div>
        <button className="Edit-button">Edit Event </button>
      </div>
    </>
  );
};

export default EventDashboard;
