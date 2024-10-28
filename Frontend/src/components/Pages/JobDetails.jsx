import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const [job, setJob] = useState(null); // State to hold job details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data); // Update state with fetched job details
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  if (!job) {
    return <div>No job details found.</div>; // If no job found
  }

  return (
    <div className="max-w-6xl m-auto my-5">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <div className="flex gap-4">
        <div className="company-icon">
          <img
            src={`https://logo.clearbit.com/${job.companyDomain}`}
            width={50}
            alt={job.companyName}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">{job.companyName}</h2>
          <p className="text-slate-500">{job.location}</p>
          <p className="text-gray-700">{job.datePosted}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Job Description:</h2>
        <p className="mt-2">{job.description}</p>
      </div>
      <div className="tags mt-4 flex gap-3">
        <div className="p-1 text-sm rounded bg-gray-100">
          {job.employmentType}
        </div>
        <div className="p-1 text-sm rounded bg-gray-100">{job.hourlyRate}</div>
      </div>
      <div className="btns mt-4 flex gap-3">
        <button className="border border-gray-300 p-2 rounded-md hover:bg-primary hover:text-white">
          Apply Now
        </button>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-primary hover:text-white">
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
