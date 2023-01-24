import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { get } from "../../utilities";

import InviteCard from "../modules/InviteCard";

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

  useEffect(() => {
    get("/api/events", { _id: props.id }).then((event) => {
      setEventName(event.name);
      setEventDescription(event.description);
    });
  }, []);

  const acceptInvite = () => {
    get("/api/events", { _id: props.id })
      .then((event) => {
        console.log("Accepted :)");
        //   get("/api/whoami")
        //     .then((user) => {
        //       //   EventModel.updateOne(
        //       //     { _id: event._id },
        //       //     {
        //       //       $set: {
        //       //         guests: [user ? user.name : "Anonymous"].concat([event.guests]),
        //       //       },
        //       //     }
        //       //   );
        //       console.log("do stuff");
        //     })
      })
      .catch((err) => console.log("Error :(", err.message));
  };

  const declineInvite = () => {
    console.log("Declined :(");
  };

  return (
    <div>
      <InviteCard name={eventName} description={eventDescription} />
      <button onClick={acceptInvite}>Accept</button>
      <button onClick={declineInvite}>Decline</button>
    </div>
  );
};

export default Invite;

// POST API ENDPOINT TESTING
//
// const TEST_EVENT = {
//     _id: "a",
//     location: "Boston",
//     type: "Food",
//     time: "6:00",
//     description: "Dinner",
//     name: "Free Food",
//     guests: [
//       {
//         name: "Bob",
//         googleid: "b",
//       },
//     ],
//     creator: {
//       name: "Bob",
//       googleid: "b",
//     },
//   };
//   const addEvent = () => {
//     post("/api/event", TEST_EVENT).then(() => console.log("Success :)"));
//   };
//   <button onClick={addEvent}>Add TEST_EVENT to database</button>
