import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./Routes/Authentication.js"
import internshipRoutes from "./Routes/Internship.js"
import employerRoutes from "./Routes/Employer.js"

require("dotenv").config(); 

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000; 

app.use("/auth",authRoutes)
app.use("/internship",internshipRoutes)
app.use("/employer",employerRoutes)

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully."))
.catch((err) => console.log("Error connecting to database: ", err));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
