import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import { useState, useEffect } from "react";

//import EventDetails from "../modules/EventDetails";
//import GuestsPanel from "../modules/GuestsPanel";

import "./Home.css";
import { RouteComponentProps } from "@reach/router";

// REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "222848081969-93l6425mo8lhnqo2t9c8cecfa4058hvc.apps.googleusercontent.com";

type Props = RouteComponentProps & {
  userId?: string;
};
const Home = (props: Props) => {
  //Events array state
  const [Events, setEvents] = useState([]);

  //call when mounted
  useEffect(() => {
    document.title = "Event";
  }, []);

  return (
    <div>
      <div>
        <h1> Let's plan your gathering!</h1>
        <h4> Name</h4>
        {/* <input type = "text" value ={} onChange={handleInputChange}/> */}
        {/* <button onClick = {submitTodo}>Add to-do!</button> */}
        <h4> Type</h4>
        <h4> Guests</h4>
      </div>

      <div>
        <span> insert name</span>
        <span> email</span>
        <p> Add Guest</p>
        <p>Generate event Link</p>
        <p>Go to "url.com/invite/63d04f176b4498a42c9606f1 to test Invite page</p>
      </div>
    </div>
  );
};

export default Home;
