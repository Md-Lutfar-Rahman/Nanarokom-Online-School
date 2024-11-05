import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        
        {/* Footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-200">
              We are dedicated to providing the best service. Our team is passionate about making a difference in the industry.
            </p>
          </div>
          
          {/* Links section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
              <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social media section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-200">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-200">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-200">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="text-center mt-8 text-gray-300">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
