const admin = require("../Model/Admin");
const Employer = require("../Model/Employer");

const registeAdminForFIrstTime = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Create a new employer
    const newEmployer = await admin.create({ name, email, password });

    res.status(201).json({
      message: "Employer registered successfully",
      employer: newEmployer,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllEmployer = async (req, res) => {
  try {
    const allEmployer = await Employer.find();
    res.status(200).json({
      message: "All Employers from database",
      allEmployer: allEmployer,
    });
  } catch (error) {
    console.log(error, "error");
  }
};
const approveEmployer = async (req, res) => {
  try {
    const { employerId, status } = req.body;

    if (!employerId || !status || !["approved", "rejected"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Invalid employer ID or status." });
    }

    const employer = await Employer.findById(employerId);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found." });
    }

    employer.status = status;
    await employer.save();

    res.status(200).json({ message: `Employer has been ${status}.`, employer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { approveEmployer, registeAdminForFIrstTime, getAllEmployer };
