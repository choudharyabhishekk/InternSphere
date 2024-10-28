const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  companySize: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employer", employerSchema);
