import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { get, post } from "../../utilities";
import { socket } from "../../client-socket";

import InviteCard from "../modules/InviteCard";
import InviteButtons from "../modules/InviteButtons";

import "./Invite.css";

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
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

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
    return () => {
      socket.off("guest");
    };
  }, []);

  const acceptInvite = () => {
    post("/api/guest", { event_id: props.id }).then(() => console.log("Accepted :)"));
    setAccepted(true);
  };

  const declineInvite = () => {
    console.log("Declined :(");
    setDeclined(true);
  };

  return (
    <div className="Invite-container">
      <InviteCard name={eventName} description={eventDescription} guestList={guestList} />
      <InviteButtons
        acceptInvite={acceptInvite}
        declineInvite={declineInvite}
        accepted={accepted}
        declined={declined}
      />
    </div>
  );
};

export default Invite;
