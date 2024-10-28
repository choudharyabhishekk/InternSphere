import React, { useState } from "react";
import { toast } from "react-toastify";

export const CreateJob = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    duration: "",
    employmentType: "",
    hourlyRate: "",
    positions: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for the changed field
  };

  const validateForm = () => {
    const newErrors = {};
    if (!jobDetails.title) newErrors.title = "Title is required.";
    if (!jobDetails.description)
      newErrors.description = "Description is required.";
    if (!jobDetails.requirements)
      newErrors.requirements = "Requirements are required.";
    if (!jobDetails.location) newErrors.location = "Location is required.";
    if (!jobDetails.duration) newErrors.duration = "Duration is required.";
    if (!jobDetails.employmentType)
      newErrors.employmentType = "Employment type is required.";
    if (!jobDetails.hourlyRate)
      newErrors.hourlyRate = "Hourly rate is required.";
    if (!jobDetails.positions)
      newErrors.positions = "Number of positions is required.";
    if (jobDetails.positions <= 0)
      newErrors.positions = "Number of positions must be greater than 0.";
    if (jobDetails.hourlyRate <= 18)
      newErrors.hourlyRate = "Hourly rate must be greater than $18.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Internship Created:", jobDetails);
      try {
        const response = await fetch("http://localhost:3000/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobDetails),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Job created successfully:", data);
          toast.success("Internship created successfully!");
        } else {
          const errorData = await response.json();
          console.error("Error creating job:", errorData.message);
        }
      } catch (error) {
        console.error("Network error:", error);
        toast.error("Error creating internship. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Internship</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Internship Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter internship title"
            value={jobDetails.title}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe the internship role"
            value={jobDetails.description}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700"
          >
            Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            placeholder="List the required skills or qualifications"
            value={jobDetails.requirements}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.requirements ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.requirements && (
            <p className="text-red-500 text-sm">{errors.requirements}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={jobDetails.location}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (in months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="e.g., 3"
            value={jobDetails.duration}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.duration ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="employmentType"
            className="block text-sm font-medium text-gray-700"
          >
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={jobDetails.employmentType}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.employmentType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select type</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
          </select>
          {errors.employmentType && (
            <p className="text-red-500 text-sm">{errors.employmentType}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="hourlyRate"
            className="block text-sm font-medium text-gray-700"
          >
            Hourly Rate
          </label>
          <input
            type="number"
            id="hourlyRate"
            name="hourlyRate"
            placeholder="$22/hour"
            value={jobDetails.hourlyRate}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.hourlyRate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.hourlyRate && (
            <p className="text-red-500 text-sm">{errors.hourlyRate}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="positions"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Positions
          </label>
          <input
            type="number"
            id="positions"
            name="positions"
            placeholder="e.g., 2"
            value={jobDetails.positions}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.positions ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.positions && (
            <p className="text-red-500 text-sm">{errors.positions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Create Internship
        </button>
      </form>
    </div>
  );
};
