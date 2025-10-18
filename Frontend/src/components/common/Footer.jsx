import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-om-india-icongeek26-linear-colour-icongeek26.png"
                alt="Bharat Bhakti Yatra"
                className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Bharat Bhakti Yatra
              </h3>
            </div>
            <div className="mb-3 sm:mb-4 space-y-1">
              <p className="text-sm text-gray-600 font-medium">Address:</p>
              <p className="text-sm text-gray-800">123 Temple Road, Connaught Place</p>
              <p className="text-sm text-gray-800">New Delhi, Delhi 110001</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-start gap-2">
                <p className="text-sm text-gray-600 font-medium">Tel:</p>
                <p className="text-sm text-gray-800">+91 9999999999</p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-sm text-gray-600 font-medium">Email:</p>
                <p className="text-sm text-gray-800 break-all">xyz@outlook.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/pujas" className="text-gray-600 hover:text-orange-500 transition-colors">Pujas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Chatdhara</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Astrology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Kundli</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors inline-block">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors inline-block">Refund Policy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors inline-block">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors inline-block">Data Removal</a></li>
            </ul>
          </div>

          {/* Contact / Social Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Contact Us
            </h4>
            <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
              Connect with us on social media for updates, spiritual content,
              and community discussions.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110" aria-label="Facebook">
                <FaFacebookF className="text-white text-base sm:text-lg" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-all hover:scale-110" aria-label="Instagram">
                <FaInstagram className="text-white text-base sm:text-lg" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110" aria-label="YouTube">
                <FaYoutube className="text-white text-base sm:text-lg" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110" aria-label="WhatsApp">
                <FaWhatsapp className="text-white text-base sm:text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-gray-200 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <FaFacebookF className="flex-shrink-0" />
              <span className="text-xs sm:text-sm">Follow us on Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
              <FaInstagram className="flex-shrink-0" />
              <span className="text-xs sm:text-sm">Follow us on Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <FaYoutube className="flex-shrink-0" />
              <span className="text-xs sm:text-sm">Subscribe to our YouTube channel</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
              <FaWhatsapp className="flex-shrink-0" />
              <span className="text-xs sm:text-sm">Join Our WhatsApp Community</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            © 2025 Bharat Bhakti Yatra. All Rights Reserved.
          </p>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
