import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a passionate team dedicated to creating amazing web experiences.
          This page demonstrates static routing in our React application.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About; 