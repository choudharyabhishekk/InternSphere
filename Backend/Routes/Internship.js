const express = require("express");
const {postJob} = require("../Controller/Internship");

const router = express.Router()

router.post("/postJob",postJob)

module.exports = router ;