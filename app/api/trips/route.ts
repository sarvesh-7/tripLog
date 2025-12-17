// import dbConnect from "@/lib/mongoose";
// import Trip from "@/lib/models/trip";

// export async function fetchTripDetails() {
//   await dbConnect;
//   const res = await Trip.find({}).lean();
//   console.log(res);
//   return new Response(JSON.stringify(res), { status: 200 });
// }