import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InternshipDetails = () => {
  const { internshipId } = useParams(); // Get internshipId from URL parameters
  const [internship, setInternship] = useState(null); // State to hold internship details
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  useEffect(() => {
    // Dummy data for the internship details
    const dummyInternshipData = {
      id: internshipId,
      title: "Software Engineering Intern",
      companyName: "InnovateTech Labs",
      companyDomain: "innovatetech.com",
      location: "Remote",
      datePosted: "2024-10-15",
      description:
        "Join our dynamic team as a Software Engineering Intern. You will work alongside our senior developers on exciting projects, gaining hands-on experience in software development.",
      employmentType: "Internship",
      duration: "6 months",
      stipend: "$500/month",
      skillsRequired: ["JavaScript", "React", "Node.js", "Problem-solving"],
      responsibilities: [
        "Collaborate with the development team on new and ongoing projects.",
        "Assist in debugging and troubleshooting software issues.",
        "Participate in team meetings and contribute ideas for improving the product.",
      ],
      applicationDeadline: "2024-11-30",
    };

    // Simulate loading delay
    setTimeout(() => {
      setInternship(dummyInternshipData); // Set dummy data
      setLoading(false); // Set loading to false
    }, 500); // Simulated delay
  }, [internshipId]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!internship) {
    return <div>No internship details found.</div>; // If no internship found
  }

  return (
    <div className="max-w-6xl m-auto my-5 p-6 border rounded-md shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{internship.title}</h1>
      <div className="flex gap-4 mb-4">
        <div className="company-icon">
          <img
            src={`https://logo.clearbit.com/${internship.companyDomain}`}
            width={50}
            alt={internship.companyName}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{internship.companyName}</h2>
          <p className="text-slate-500">{internship.location}</p>
          <p className="text-gray-500">Posted on: {internship.datePosted}</p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Internship Description:</h2>
        <p className="mt-2">{internship.description}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Responsibilities:</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {internship.responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="details mt-4 flex flex-wrap gap-3">
        <div className="p-2 text-sm rounded bg-gray-100">
          <strong>Employment Type:</strong> {internship.employmentType}
        </div>
        <div className="p-2 text-sm rounded bg-gray-100">
          <strong>Duration:</strong> {internship.duration}
        </div>
        <div className="p-2 text-sm rounded bg-gray-100">
          <strong>Stipend:</strong> {internship.stipend}
        </div>
        <div className="p-2 text-sm rounded bg-gray-100">
          <strong>Application Deadline:</strong>{" "}
          {internship.applicationDeadline}
        </div>
      </div>

      <div className="skills mt-4">
        <h2 className="text-lg font-semibold">Skills Required:</h2>
        <div className="flex gap-2 flex-wrap mt-2">
          {internship.skillsRequired.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm rounded bg-blue-100 text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="btns mt-6 flex gap-3">
        <button
          onClick={() => navigate(`/apply-now/${internship._id}`)}
          className="border border-gray-300 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition"
        >
          Apply Now
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition">
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default InternshipDetails;
