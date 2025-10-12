import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center mr-3">
                <img 
                  width="64" 
                  height="64" 
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-om-india-icongeek26-linear-colour-icongeek26.png" 
                  alt="external-om-india-icongeek26-linear-colour-icongeek26"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Bharat Bhakti Yatra</h3>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Address:</p>
              <p className="text-sm text-gray-800">ansjkdjakd ajskdajs ajskdna , asd</p>
              <p className="text-sm text-gray-800">A, New Delhi, Delhi 111111</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Tel:</p>
              <p className="text-sm text-gray-800">+91 9999999999</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email:</p>
              <p className="text-sm text-gray-800">xyz@outlook.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/pujas" className="text-gray-600 hover:text-orange-500 transition-colors">Pujas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Chatdhara</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Astrology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Kundli</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Data Removal</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-gray-600 text-sm mb-4">
              Connect with us on social media for updates, 
              spiritual content, and community discussions
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C15.523 0 20 4.477 20 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM8.5 6c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM8.5 14.5L5 11l1.414-1.414L8.5 11.672l5.086-5.086L15 8.086 8.5 14.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center space-x-6 space-y-2">
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Follow us on Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
              </svg>
              <span className="text-sm">Follow us on Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C15.523 0 20 4.477 20 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM8.5 6c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Subscribe to our YouTube channel</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM8.5 14.5L5 11l1.414-1.414L8.5 11.672l5.086-5.086L15 8.086 8.5 14.5z"/>
              </svg>
              <span className="text-sm">Join Our WhatsApp Community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;