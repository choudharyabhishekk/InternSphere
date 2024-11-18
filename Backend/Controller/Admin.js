const Admin = require("../Model/Admin");
const Employer = require("../Model/Employer");

const registeAdminForFirstTime = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // For creating super admin credentials
    const superAdmin = await Admin.create({ name, email, password });

    res
      .status(200)
      .json({
        message: "Superadmin added successfully",
        Superadmin: superAdmin,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Something went wrong.",
        success: false
    });
  }
};

const getAllEmployer = async (req, res) => {
  try {
    const allEmployer = await Employer.find();

    res
      .status(200)
      .json({
        message: "All Employers from database",
        allEmployer: allEmployer,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Something went wrong.",
        success: false
    });
  }
};

const approveEmployer = async (req, res) => {
 const employerId =  req.body.employerId;
  try {
    if (employerId) {
      await Employer.findByIdAndUpdate(
        { _id : employerId },
        { Status: "Approve" },
        { new: true }
      );
      res.status(200).send({ Message: "Employer approved successfully." });
    } else {
      res
        .status(401)
        .send({ Error: "Please pass employer Id to approve Employer" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Something went wrong.",
        success: false
    });
  }
};

const rejectEmployer = async (req, res) => {
  const employerId = req.body.employerId;
  try {
    if (employerId) {
      await Employer.findByIdAndUpdate(
        { _id : employerId },
        { Status: "Reject" },
        { new: true }
      );
      res.status(200).send({ Message: "Employer rejected successfully." });
    } else {
      res
        .status(401)
        .send({ Error: "Please pass employer Id to approve Employer" });
    }
  } catch (error) {
    console.log(error);
        return res.status(500).json({
            message: "Something went wrong.",
            success: false
        });
  }
};

module.exports = {
  rejectEmployer,
  approveEmployer,
  getAllEmployer,
  registeAdminForFirstTime,
};
