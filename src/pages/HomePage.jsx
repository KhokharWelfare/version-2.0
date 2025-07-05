import React from "react";
import { useNavigate } from 'react-router-dom';

// Home Page Component
function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to Khokhar Welfare Foundation</h2>
        <p className="text-lg mb-8">
          We are dedicated to providing humanitarian aid and support to those in need across the globe.
          Our mission is to create a better future through education, healthcare, and emergency relief programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => navigate('/about')}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Learn More About Us
          </button>
          <button 
            onClick={() => navigate('/donate')}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Donate Now
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Education for All</h3>
            <p>Providing access to quality education for underprivileged children around the world.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
            <p>Improving medical care and facilities in remote and underserved communities.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Emergency Relief</h3>
            <p>Responding quickly to natural disasters and crises with vital supplies and support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;