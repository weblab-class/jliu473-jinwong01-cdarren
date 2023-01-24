import { Schema, model, Document } from "mongoose";

const EventSchema = new Schema({
  location: String,
  type: String,
  time: String,
  description: String,
  name: String,
  creator: {
    name: String,
    googleid: String,
  },
});

export interface Event extends Document {
  _id: string;
  location: string;
  type: string;
  time: string;
  description: String;
  name: String;
  creator: {
    name: String;
    googleid: String;
    _id: string;
  };
}

const EventModel = model<Event>("Event", EventSchema);

export default EventModel;
