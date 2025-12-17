import dbConnect from "@/lib/mongoose";
import TripModel, { TripWithId, type Trip } from "@/lib/models/trip";
import mongoose from "mongoose";

export async function fetchTripDetails(): Promise<TripWithId[] | null> {
  try {
    await dbConnect;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await TripModel.find({}).lean();
    return res.map((data) => ({ ...data, _id: data._id.toString() }));
  }
  catch (err) {
    throw new Error("Something went wrong");
  }
}

export async function fetchTripById(id: string): Promise<TripWithId | null> {
  try {
    await dbConnect;
    if (!id || !mongoose.isValidObjectId(id)) return null;
    const data = await TripModel.findById(id).lean();
    if (!data) return null;
    return {
      ...data,
      _id: data._id.toString()
    };
  }
  catch (err) {
    throw new Error("Something went wrong");
  }

}

export async function saveTrips(tripData: Trip): Promise<TripWithId | null>  {
  try {
    await dbConnect;
    const trip = new TripModel(tripData);
    const savedTrip = await trip.save();
    return savedTrip;
  }
  catch (err) {
    throw new Error("Something went wrong");
  }
}