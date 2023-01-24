import React from "react";
import { RouteComponentProps } from "@reach/router";
import "./EventDashboard.css";

type Dashboard = RouteComponentProps;
const EventDashboard = (props: Dashboard) => {
  return (
    <>
      <div>
        <h1 className="Event-title"> "Event Title Here" </h1>
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
