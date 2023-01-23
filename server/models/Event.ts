import { Schema, model, Document } from "mongoose";

const EventSchema = new Schema({
  id: String,
  location: String,
  type: String,
  time: String,
  guests: [
    {
      name: String,
      googleid: String,
    },
  ],
  creator: {
    name: String,
    googleid: String,
  },
});

export interface Event extends Document {
  id: string;
  location: string;
  type: string;
  time: string;
  guests: [
    {
      name: String;
      googleid: String;
      _id: string;
    }
  ];
  creator: {
    name: String;
    googleid: String;
    _id: string;
  };
}

const EventModel = model<Event>("Event", EventSchema);

export default EventModel;
