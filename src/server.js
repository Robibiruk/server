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

// Enable CORS so React frontend can call backend
app.use(cors());

// Use test routes
app.use("/api", testRoutes);

// Parse JSON bodies (for non-file routes)
app.use(express.json());

// Serve uploaded images statically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Mount report routes
app.use("/api/reports", reportRoutes);

// Test main API route
app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));