import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import EventCreation from "../modules/EventCreation";


import "./Skeleton.css";
import { RouteComponentProps } from "@reach/router";

// REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "222848081969-93l6425mo8lhnqo2t9c8cecfa4058hvc.apps.googleusercontent.com";

type Props = RouteComponentProps & {
  userId?: string;
  handleLogin: (credentialResponse: CredentialResponse) => void;
  handleLogout: () => void;
};
const Skeleton = (props: Props) => {
  const { handleLogin, handleLogout } = props;

  return (
    <div>
      
    </div>
  );
};

export default Skeleton;
