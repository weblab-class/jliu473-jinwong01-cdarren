import { Schema, model, Document } from "mongoose";

const EventSchema = new Schema({
  location: String,
  date: String,
  type: String,
  time: String,
  description: String,
  name: String,
  creator: {
    name: String,
    googleid: String,
  },
});

const Event = model<Event>("Event", EventSchema);

export default Event;
