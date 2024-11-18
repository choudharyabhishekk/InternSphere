const express = require("express");
const {postJob, getAllJobs, getJobByID} = require("../Controller/Internship");

const router = express.Router()

router.post("/postJob",postJob)
router.get("/getAllJobs",getAllJobs)
router.get("/getJobByID",getJobByID)

module.exports = router ;