const express = require("express");
const { getAllEmployer } = require("../Controller/Admin");

const router = express.Router();

router.get("/getAllEmployer", getAllEmployer);

module.exports = router;
