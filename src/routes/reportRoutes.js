import express from "express";
import multer from "multer";
import { createReport, getReports } from "../controllers/reportController.js";

const router = express.Router();

// Multer config
const upload = multer({ dest: "uploads/" });

// Routes
router.post("/", upload.single("image"), createReport);
router.get("/", getReports);

export default router;