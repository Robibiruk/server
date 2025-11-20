import Report from "../models/Report.js";
import path from "path";

export const createReport = async (req, res) => {
  try {
    console.log("Incoming report:", req.body);
    console.log("File:", req.file);

    // Make the path relative to your static folder, with forward slashes
    const imageUrl = req.file ? `uploads/${req.file.filename}` : "";

    const report = await Report.create({
      title: req.body.title,
      desc: req.body.desc,
      imageUrl, // <-- this now matches your static folder URL
      lat: req.body.lat,
      lng: req.body.lng,
    });

    res.json({ ok: true, report });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};