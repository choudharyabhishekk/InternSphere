import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyInternship = () => {
  const { internshipId } = useParams(); // Get internshipId from the URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send this data to an API here)
    console.log("Form Data submitted:", formData);
  };

  return (
    <div className="max-w-6xl m-auto my-5 p-6 border rounded-md shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Apply for Internship</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-md font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-md font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="resume" className="block text-md font-semibold">
            Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="coverLetter" className="block text-md font-semibold">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            rows="5"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="py-2 px-4 mb-3 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyInternship;
