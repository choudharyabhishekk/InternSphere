import React from "react";
import { JobCard } from "./JobCard";

const Dashboard = () => {
  // Dummy data
  const jobs = [
    {
      id: 1,
      title: "Software Developer Intern",
      description: "Work on full-stack development.",
      location: "New York",
      companyName: "Tech Corp",
      datePosted: "2024-09-30",
      salary: "$20/hour",
      jobType: "Full-time",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      description: "Assist in data analysis and reporting.",
      location: "San Francisco",
      companyName: "Data Insights",
      datePosted: "2024-09-28",
      salary: "$22/hour",
      jobType: "Part-time",
    },
    {
      id: 3,
      title: "UX/UI Designer Intern",
      description: "Design user-friendly interfaces.",
      location: "Remote",
      companyName: "Design Studio",
      datePosted: "2024-09-25",
      salary: "$18/hour",
      jobType: "Full-time",
    },
    {
      id: 4,
      title: "Marketing Intern",
      description: "Support digital marketing campaigns.",
      location: "Toronto",
      companyName: "Market Masters",
      datePosted: "2024-09-29",
      salary: "$19/hour",
      jobType: "Part-time",
    },
    {
      id: 5,
      title: "Finance Intern",
      description: "Assist with financial reporting.",
      location: "Chicago",
      companyName: "FinTech Solutions",
      datePosted: "2024-09-27",
      salary: "$21/hour",
      jobType: "Full-time",
    },
    {
      id: 6,
      title: "HR Intern",
      description: "Assist with recruitment and onboarding.",
      location: "Remote",
      companyName: "People First",
      datePosted: "2024-09-26",
      salary: "$17/hour",
      jobType: "Part-time",
    },
  ];

  const handleSearch = (e) => {
    return jobs.filter((j) => j.title === e.target.value);
  };

  return (
    <div className="max-w-6xl m-auto my-5">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Internships"
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <div className="job-list grid gap-10 md:grid-cols-3 sm:grid-cols-2">
        {jobs.map((c, index) => (
          <JobCard
            key={index}
            company={c.companyName}
            datePosted={c.datePosted}
            title={c.title}
            description={c.description}
            location={c.location}
            salary={c.salary}
            jobType={c.jobType}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
