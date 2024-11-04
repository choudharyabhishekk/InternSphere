
import express from "express"
import { registerEmployer } from "../Controller/Employer";

const router = express.Router()

router.post("/registerEmployer",registerEmployer)

module.exports = router ;