import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <ul>
              <li>1234 Street Name</li>
              <li>City, State, 56789</li>
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
            <p>Subscribe to our newsletter to get the latest updates and offers.</p>
            <form action="#" className="mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded mb-2 text-gray-800"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
