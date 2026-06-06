import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;

  if (!mongoUri) {
    throw new Error(
      "MongoDB connection string is missing. Set MONGO_URI or MONGO_URL."
    );
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB Connected");
};

export default connectDB;