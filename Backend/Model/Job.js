// Models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: Number, required: true }, // in months
    employmentType: { type: String, required: true },
    hourlyRate: { type: Number, required: true },
    positions: { type: Number, required: true },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
