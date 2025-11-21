import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import reportRoutes from "./routes/reportRoutes.js";
import testRoutes from "./routes/testRoutes.js";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// JSON parser
app.use(express.json());

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", testRoutes);               // /api/test etc
app.use("/api/reports", reportRoutes);     // /api/reports

// Simple API test
app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

// DB connection
connectDB();

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));