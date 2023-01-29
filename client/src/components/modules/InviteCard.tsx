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
    <div className="InviteCard-container">
      <div className="InviteCard-title">{props.name}</div>
      <div className="InviteCard-subContainer">
        <div className="InviteCard-textContainer">
          <div className="InviteCard-subtitle">Event Descripton</div>
          <div className="u-textCenter">{props.description}</div>
        </div>
        <div className="InviteCard-textContainer">
          <div className="InviteCard-subtitle">Guest List</div>
          <div className="u-textCenter">{props.guestList}</div>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;
