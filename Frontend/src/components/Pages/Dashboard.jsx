import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]); // State for job data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();
  // Dummy data
  const dummyJobs = [
    {
      id: 1,
      title: "Software Developer Intern",
      description: "Work on full-stack development.",
      location: "New York",
      companyName: "Tech Corp",
      datePosted: "2024-09-30",
      hourlyRate: "$20/hour",
      employmentType: "Full-time",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      description: "Assist in data analysis and reporting.",
      location: "San Francisco",
      companyName: "Data Insights",
      datePosted: "2024-09-28",
      hourlyRate: "$22/hour",
      employmentType: "Part-time",
    },
    {
      id: 3,
      title: "UX/UI Designer Intern",
      description: "Design user-friendly interfaces.",
      location: "Remote",
      companyName: "Design Studio",
      datePosted: "2024-09-25",
      hourlyRate: "$18/hour",
      employmentType: "Full-time",
    },
    {
      id: 4,
      title: "Marketing Intern",
      description: "Support digital marketing campaigns.",
      location: "Toronto",
      companyName: "Market Masters",
      datePosted: "2024-09-29",
      hourlyRate: "$19/hour",
      employmentType: "Part-time",
    },
    {
      id: 5,
      title: "Finance Intern",
      description: "Assist with financial reporting.",
      location: "Chicago",
      companyName: "FinTech Solutions",
      datePosted: "2024-09-27",
      hourlyRate: "$21/hour",
      employmentType: "Full-time",
    },
    {
      id: 6,
      title: "HR Intern",
      description: "Assist with recruitment and onboarding.",
      location: "Remote",
      companyName: "People First",
      datePosted: "2024-09-26",
      hourlyRate: "$17/hour",
      employmentType: "Part-time",
    },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        console.log(data);
        // Update jobs state with fetched data or fallback to dummy data
        setJobs(data.length > 0 ? data : dummyJobs);
      } catch (error) {
        setError(error.message);
        // Fallback to dummy data if there is an error
        setJobs(dummyJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredJobs = dummyJobs.filter((j) =>
      j.title.toLowerCase().includes(searchValue)
    );
    setJobs(filteredJobs); // Update state with filtered jobs
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }
  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`); // Navigate to job details page
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
        {jobs.map((c) => (
          <JobCard
            key={c.id}
            onClick={() => handleJobClick(c._id)}
            company="Microsoft"
            datePosted={c.datePosted}
            title={c.title}
            description={c.description}
            location={c.location}
            hourlyRate={"$" + c.hourlyRate}
            employmentType={c.employmentType}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
