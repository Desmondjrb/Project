import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./usersRoutes.js";

// Load environment variables
dotenv.config();



// Initialize express
const app = express();
const port = process.env.PORT;


// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use("/api", userRouter);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

  // Basic route
app.get("/", (req, res) => {
  res.json("Welcome to my app!");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});