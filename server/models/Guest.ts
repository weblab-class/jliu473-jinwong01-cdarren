import { Schema, model, Document } from "mongoose";

const GuestSchema = new Schema({
  name: String,
  googleid: String,
  event_id: String,
});

export interface Guest extends Document {
  name: string;
  googleid: string;
  // event_id: string;
  _id: string;
}

const GuestModel = model<Guest>("Guest", GuestSchema);

export default GuestModel;
