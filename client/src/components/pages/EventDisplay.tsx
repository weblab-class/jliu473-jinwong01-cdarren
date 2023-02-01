import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import EventDashboard from "./EventDashboard.tsx";
import { get, post } from "../../utilities";
import CopyLinkButton from "../modules/CopyLinkButton";
import EventChange from "./EventChange.tsx";

type Dashboard = RouteComponentProps & {
  id: String;
};
const EventDisplay = (props) => {
  return (
    <>
      {/* Event Details */}
      <div>
      {/* {currentComponent === 'EventDashboard' ? (<EventDashboard/>) : (<EventChange></EventChange>)} */}
      <EventDashboard id = {props.id}></EventDashboard>
      </div> 

      {/* Change Button */} 
      <div>
        {/* <Link to={"/editevent/" + props.id}>
          <button className="Edit-button"> Edit Event </button>
        </Link> */}
      </div> 

      {/* Invite Link */}
      <div> Here is your invite link</div>
      <div> gatherify.herokuapp.com/invite/{props.id}</div>
      <CopyLinkButton link = "gatherify.herokuapp.com/invite/" eventId = {props.id}></CopyLinkButton>
    </>
  );
};

export default EventDisplay;
