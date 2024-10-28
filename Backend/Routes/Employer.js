const express = require("express");
const { registerEmployer } = require("../Controller/Employer");

const router = express.Router();

router.post("/registerEmployer", registerEmployer);

module.exports = router;
