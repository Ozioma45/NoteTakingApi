import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./routes/notes.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/notes", noteRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to the Note-Taking API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
