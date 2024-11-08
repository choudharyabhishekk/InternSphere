
const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    industry: {
        type: String,
        required: false
    },
    companySize: {
        type: String,
        required: false
    },
    Status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Employer =  mongoose.model("Employer", employerSchema);

module.exports = Employer
