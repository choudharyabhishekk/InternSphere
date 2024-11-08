
const Employer = require("../Model/Employer");


 const registerEmployer = async (req, res) => {
    try {
        const { companyName, email, phoneNumber, address, website, industry, companySize } = req.body;

        // Check if all required fields are provided
        if ( !companyName || !email || !phoneNumber) {
            return res.status(400).json({ message: "Please fill all required fields." });
        }

        // Check if the email is already in use
        const existingEmployer = await Employer.findOne({ email });
        if (existingEmployer) {
            return res.status(409).json({ message: "Employer with this email already exists." });
        }

        // Create a new employer
        const newEmployer = await Employer.create({
            companyName,
            email,
            phoneNumber,
            address,
            website,
            industry,
            companySize
        })

        res.status(201).json({ message: "Employer registered successfully", employer: newEmployer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


module.exports = {registerEmployer}
