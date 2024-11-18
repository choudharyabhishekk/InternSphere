import React from "react";
import banner from "../../assets/banner-image.jpg";
const Homepage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-blue-500 text-white py-20 text-center"
        style={{
          backgroundImage: "url(banner)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-500 opacity-75"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream Internship
          </h1>
          <p className="text-lg mb-6">
            Start your career journey with our exclusive internship
            opportunities.
          </p>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-400 transition">
            Browse Internships
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide a platform that connects students with top companies
              offering internship opportunities. Whether you're looking for
              experience or a stepping stone into your career, we've got you
              covered.
            </p>
          </div>
        </div>
      </section>

      {/* Search Internships Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">
            Search Internships
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore thousands of internship roles tailored to your interests.
          </p>
          <form className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Search internships by role, company, or location"
              className="px-4 py-3 border border-gray-300 rounded-lg w-full max-w-md text-lg"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Internships Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Featured Internships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt={`Featured Internship ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-500">
                    Internship Role {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Learn and grow with this exciting opportunity at a leading
                    company.
                  </p>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded-lg text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 rounded-lg text-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 border border-gray-300 rounded-lg text-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Internship Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
