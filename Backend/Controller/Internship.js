
const Job = require("../Model/Internship");


const postJob = async (req, res) => {
    const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
    const userId = req.id;
    try {

        // show error if all the fields in form are not there
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };

        // Create a job in database
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

 const getAllJobs = async (req, res) => {
    try {
        // const keyword = req.query.keyword || "";
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllJobs,postJob}

