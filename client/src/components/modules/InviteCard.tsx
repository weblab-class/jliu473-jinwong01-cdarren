import React from "react";
import { RouteComponentProps } from "@reach/router";

import "./InviteCard.css";

type Props = RouteComponentProps & {
  name: String;
  description: String;
  guestList: String[];
};

/**
 * InviteCard is a component for displaying event name and description on the Invite page.
 */

const InviteCard = (props: Props) => {
  return (
    <div>
      <div>Event Name: {props.name ? props.name : "Event name"}</div>
      <div>Event Descripton: {props.description ? props.description : "Event description"}</div>
      <div>Guest List: {props.guestList}</div>
    </div>
  );
};

export default InviteCard;
