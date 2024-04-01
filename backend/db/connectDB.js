import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
// console.log(process.env);

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected into database successfully");
  } catch (error) {
    console.log("error occur", error);
    process.exit(1);
  }
}

export async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from the database.");
  } catch (err) {
    console.log("Error: ", error);
    process.exit(1);
  }
}


