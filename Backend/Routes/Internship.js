
import express from "express"
import { postJob } from "../Controller/Internship";

const router = express.Router()

router.post("/postJob",postJob)

module.exports = router ;