import mongoose from "mongoose";
import { type HydratedDocument } from "mongoose";

const { Schema, model, models } = mongoose;

export interface Trip {
  name: string;
  email: string;
  location: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  summary: string;
  experience: string;
  image: string;
}

export type TripDocument = HydratedDocument<Trip>;

const TripSchema = new Schema<Trip>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  title: { type: String },
  dateFrom: { type: String },
  dateTo: { type: String },
  summary: { type: String },
  experience: { type: String },
  image: { type: String }
});

const TripModel = models.Trip || model<Trip>('Trip', TripSchema);

export type TripWithId = Trip & { _id: string };

export default TripModel;