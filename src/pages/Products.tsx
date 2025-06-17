import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, category: 'electronics' },
    { id: 2, name: 'Product 2', price: 49.99, category: 'clothing' },
    { id: 3, name: 'Product 3', price: 19.99, category: 'books' },
    { id: 4, name: 'Product 4', price: 79.99, category: 'electronics' },
    { id: 5, name: 'Product 5', price: 39.99, category: 'clothing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Browse our collection of amazing products
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-2">
                Category: {product.category}
              </p>
              <p className="text-2xl font-bold text-green-600 mb-4">
                ${product.price}
              </p>
              <Link 
                to={`/products/${product.id}`}
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products; 