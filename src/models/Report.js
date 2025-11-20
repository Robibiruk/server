import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: String,
  desc: String,
  imageUrl: String,
  lat: Number,
  lng: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Report", reportSchema);