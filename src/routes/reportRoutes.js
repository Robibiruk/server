import express from "express";
import multer from "multer";
import { createReport, getReports } from "../controllers/reportController.js";

const router = express.Router();

// Multer — stores images in /uploads/
const upload = multer({ dest: "uploads/" });

// POST /api/reports
router.post("/", upload.single("image"), createReport);

// GET /api/reports
router.get("/", getReports);

export default router;