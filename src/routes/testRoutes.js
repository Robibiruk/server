import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Test route running" });
});

export default router;