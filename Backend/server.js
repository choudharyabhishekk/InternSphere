// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/Authentication.js");
const jobRoutes = require("./Routes/JobRoutes.js");
const employerRoutes = require("./Routes/Employer.js");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;

app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes); // Use the job routes
app.use("/employer", employerRoutes);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.log("Error connecting to database: ", err));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
