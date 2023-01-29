import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { get, post } from "../../utilities";

import InviteCard from "../modules/InviteCard";

import "./Invite.css";
import { socket } from "../../client-socket";

type Props = RouteComponentProps & {
  id: String;
};

/**
 * The page for users to accept or decline invites to events.
 */
const Invite = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [guestList, setGuestList] = useState([]);

  const loadGuestList = () => {
    get("/api/guests", { event_id: props.id }).then((guests) => {
      const guestNames = guests.map((guest) => guest.name);
      setGuestList(guestNames.join(", "));
    });
  };

  useEffect(() => {
    get("/api/events", { id: props.id }).then((event) => {
      setEventName(event.name);
      setEventDescription(event.description);
    });
  }, []);

  useEffect(() => {
    loadGuestList();
  }, []);

  useEffect(() => {
    socket.on("guest", loadGuestList);
  }, []);

  const acceptInvite = () => {
    post("/api/guest", { event_id: props.id }).then(() => console.log("Accepted :)"));
  };

  const declineInvite = () => {
    console.log("Declined :(");
  };

  return (
    <div>
      <InviteCard name={eventName} description={eventDescription} guestList={guestList} />
      <button onClick={acceptInvite}>Accept</button>
      <button onClick={declineInvite}>Decline</button>
    </div>
  );
};

export default Invite;
