import admin from '../Model/Admin'
import Employer from '../Model/Employer';


export const registeAdminForFIrstTime = async (req,res) => {
    const {name,email,password} = req.body;
    try {
          // Create a new employer
        const newEmployer = await admin.create({name,email,password})

        res.status(201).json({ message: "Employer registered successfully", employer: newEmployer });
    } catch (error) {
        console.log(error)
    }
} 

export const approveEmployer = async (req, res) => {
    try {
        const { employerId, status } = req.body;

        if (!employerId || !status || !["approved", "rejected"].includes(status)) {
            return res.status(400).json({ message: "Invalid employer ID or status." });
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

