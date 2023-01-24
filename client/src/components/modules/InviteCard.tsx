import React from "react";
import { RouteComponentProps } from "@reach/router";

import "./InviteCard.css";

type Props = RouteComponentProps & {
  name: String;
  description: String;
};

/**
 * InviteCard is a component for displaying event name and description on the Invite page.
 */

const InviteCard = (props: Props) => {
  return (
    <div>
      <div>{props.name ? props.name : "Event name"}</div>
      <div>{props.description ? props.description : "Event description"}</div>
    </div>
  );
};

export default InviteCard;
