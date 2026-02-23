import express from "express";
import { connectDB } from "./config/ConnectDb";

const app= express()


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});