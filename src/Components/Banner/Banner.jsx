import React from 'react';

function Banner() {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://your-image-url.com')" }}>
      
      {/* Overlay for dimmed effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Banner content */}
      <div className="relative z-10 text-center px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover our amazing services and get inspired by our work.
        </p>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
