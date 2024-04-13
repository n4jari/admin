import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    // const db = await mongoose.connect(process.env.MONGO);
    const db = await mongoose.connect("mongodb://localhost:27017/dashboard");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
