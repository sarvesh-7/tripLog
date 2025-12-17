import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("Plase define MONGODB_URI inside .env file");
}

declare global{
    var mongoosePromise: Promise<typeof mongoose> | undefined;
}

let cached = global.mongoosePromise;

if(!cached){
    cached = mongoose.connect(MONGODB_URI, {});
    global.mongoosePromise = cached;
}

export default cached;