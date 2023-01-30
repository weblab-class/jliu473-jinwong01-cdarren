import React from "react";
import { RouteComponentProps } from "@reach/router";

import "./InviteButtons.css";

type Props = RouteComponentProps & {
  acceptInvite: () => void;
  declineInvite: () => void;
  accepted: boolean;
  declined: boolean;
};

const InviteButtons = (props: Props) => {
  if (props.accepted) return <div className="InviteButtons-doneContainer">Accepted! :)</div>;
  else if (props.declined) return <div className="InviteButtons-doneContainer">Declined :)</div>;
  return (
    <div className="InviteButtons-container">
      <button onClick={props.acceptInvite} className="InviteButtons-accept">
        Accept
      </button>
      <button onClick={props.declineInvite} className="InviteButtons-decline">
        Decline
      </button>
    </div>
  );
};

export default InviteButtons;
