import React from 'react';
import { Link } from 'react-router-dom';

const UIConfirm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          UI Confirm
        </h1>
       
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

export default UIConfirm; 