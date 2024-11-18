import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const { authState } = useAuthContext();
  const [jobs, setJobs] = useState([]); // State for job data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  // authcontext

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/internship/getAllJobs"
        );
        if (!response.ok) {
          throw new Error("No Jobs Found");
        }
        const data = await response.json();

        // Update jobs state with fetched data or fallback to dummy data
        setJobs(data.jobs.length > 0 ? data.jobs : null);
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
  const handleJobClick = (jobId, title) => {
    const friendlyURL = title.split(" ").join("-").toLowerCase();
    navigate(`/job/${friendlyURL}/${jobId}`);
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
            key={c._id}
            id={c._id}
            onClick={() => handleJobClick(c._id, c.title)}
            companyDomain={c.website}
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
