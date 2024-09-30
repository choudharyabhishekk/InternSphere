import React from "react";

const Dashboard = () => {
  // Dummy data
  const jobs = [
    {
      id: 1,
      title: "Software Developer Intern",
      description: "Work on full-stack development.",
      location: "New York",
      apply: "Apply",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      description: "Assist in data analysis and reporting.",
      location: "San Francisco",
      apply: "Apply",
    },
    {
      id: 3,
      title: "UX/UI Designer Intern",
      description: "Design user-friendly interfaces.",
      location: "Remote",
      apply: "Apply",
    },
    {
      id: 4,
      title: "Marketing Intern",
      description: "Support digital marketing campaigns.",
      location: "Toronto",
      apply: "Apply",
    },
    {
      id: 5,
      title: "Finance Intern",
      description: "Assist with financial reporting.",
      location: "Chicago",
      apply: "Apply",
    },
    {
      id: 6,
      title: "HR Intern",
      description: "Assist with recruitment and onboarding.",
      location: "Remote",
      apply: "Apply",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-300 p-6 rounded-md shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.description}</p>
            <p className="font-medium mb-4">
              <strong>Location:</strong> {job.location}
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-400">
              {job.apply}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
