import React from "react";
import { post } from "../../utilities";

// POST API ENDPOINT TESTING

const TEST_EVENT = {
  location: "Boston",
  type: "Food",
  time: "6:00",
  description: "Dinner",
  name: "Free Food",
  creator: {
    name: "Bob",
    googleid: "b",
  },
};

const Test = (props) => {
  const addEvent = () => {
    post("/api/event", TEST_EVENT)
      .then(() => console.log("Success :)"))
      .catch((err) => console.log("Error :(", err.message));
  };

  return <button onClick={addEvent}>Add event to database</button>;
};

export default Test;
