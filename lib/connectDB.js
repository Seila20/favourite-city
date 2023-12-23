import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "city",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
