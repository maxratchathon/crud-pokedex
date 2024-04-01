const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
// console.log(process.env);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log("Error occurred while connecting to the database:", error);
    process.exit(1);
  }
}

async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from the database.");
  } catch (error) {
    console.log("Error occurred while disconnecting from the database:", error);
    process.exit(1);
  }
}

module.exports = { connectDB, disconnectDB };
