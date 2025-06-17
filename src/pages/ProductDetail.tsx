import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock product data - in a real app, you'd fetch this based on the ID
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, category: 'electronics', description: 'This is an amazing electronic product with cutting-edge features.' },
    { id: 2, name: 'Product 2', price: 49.99, category: 'clothing', description: 'Comfortable and stylish clothing item perfect for any occasion.' },
    { id: 3, name: 'Product 3', price: 19.99, category: 'books', description: 'An insightful book that will change your perspective on life.' },
    { id: 4, name: 'Product 4', price: 79.99, category: 'electronics', description: 'High-quality electronic device with premium features.' },
    { id: 5, name: 'Product 5', price: 39.99, category: 'clothing', description: 'Trendy clothing item that combines style and comfort.' },
  ];

  const productId = id ? parseInt(id) : 1;
  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                <span className="text-gray-500 text-lg">Product Image</span>
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-4">
                ${product.price}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>
              
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mr-4">
                Add to Cart
              </button>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Product Details
            </h2>
            <p className="text-gray-600">
              This is a detailed view of product ID: {productId}. 
              In a real application, this would contain comprehensive product information,
              specifications, reviews, and related products.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 space-x-4">
          <a 
            href="/products" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Products
          </a>
          <a 
            href="/" 
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 