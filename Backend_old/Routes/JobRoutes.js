// Routes/JobRoutes.js
const express = require("express");
const Job = require("../Model/Job");

const router = express.Router();

// POST route to create a job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error creating job", error: error.message });
  }
});

// GET route to retrieve all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching jobs", error: error.message });
  }
});

module.exports = router;
