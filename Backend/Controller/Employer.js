const authModel = require("../Model/Authentication");
const Employer = require("../Model/Employer");
const bcrypt = require("bcryptjs");

const registerEmployer = async (req, res) => {
  try {
    const {
      companyName,
      email,
      password,
      phoneNumber,
      address,
      website,
      industry,
      companySize,
    } = req.body;

    // Check if all required fields are provided
    if (!companyName || !email || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    // Check if the email is already in use
    const existingEmployer = await Employer.findOne({ email });

    if (existingEmployer) {
      return res
        .status(409)
        .json({ message: "Employer with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employer
    const newEmployer = await Employer.create({
      companyName,
      email,
      phoneNumber,
      address,
      website,
      industry,
      companySize,
    });

    // Save user credentials to authModel
    const newAuthUser = await authModel.create({
      name: companyName,
      email,
      password: hashedPassword,
      userType: "employer",
    });

    res.status(201).json({
      message: "Employer registered successfully",
      employer: newEmployer,
      authUser: newAuthUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong.",
      success: false,
    });
  }
};

module.exports = { registerEmployer };
