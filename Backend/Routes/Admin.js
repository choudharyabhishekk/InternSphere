const express = require("express");
const { approveEmployer, rejectEmployer, getAllEmployer, registeAdminForFirstTime } = require("../Controller/Admin.js");

const router = express.Router()

router.post("/registeAdminForFirstTime",registeAdminForFirstTime)
router.get("/getAllEmployer",getAllEmployer)
router.put("/approveEmployer",approveEmployer)
router.put("/rejectEmployer",rejectEmployer)

module.exports = router ;



