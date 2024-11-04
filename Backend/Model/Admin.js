import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const admin = mongoose.model("adminModel",adminSchema)

module.exports = admin;


