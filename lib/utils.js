import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://n4jari:n4jari@cluster0.lusmdgx.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
