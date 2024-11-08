const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ["admin", "user", "employer"],
    required: true,
  },
  id: { type: String },
});

const authModel = mongoose.model("authModel", authSchema);

module.exports = authModel;
