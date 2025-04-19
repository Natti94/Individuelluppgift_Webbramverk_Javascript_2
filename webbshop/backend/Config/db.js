import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export async function connectDB() {
  const mongoURI = import.meta.env.VITE_MONGO_DB;
  try {
    await mongoose.connect(mongoURI);
    console.log("connection to MongoDB successful");
  } catch (error) {
    console.error("connection to MongoDB failed", error);
  }
}
