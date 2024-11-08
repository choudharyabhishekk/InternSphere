const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/Authentication");
const internshipRoutes = require("./Routes/Internship");
const employerRoutes = require("./Routes/Employer");
const adminRoutes = require("./Routes/Admin");

require("dotenv").config(); 

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000; 

app.use("/auth",authRoutes)
app.use("/internship",internshipRoutes)
app.use("/employer",employerRoutes)
app.use("/admin",adminRoutes)

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully."))
.catch((err) => console.log("Error connecting to database: ", err));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
