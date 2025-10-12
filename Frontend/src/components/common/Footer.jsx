import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-14 items-start">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-om-india-icongeek26-linear-colour-icongeek26.png"
                alt="Bharat Bhakti Yatra"
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Bharat Bhakti Yatra
              </h3>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Address:</p>
              <p className="text-sm text-gray-800">
              123 Temple Road, Connaught Place
              </p>
              <p className="text-sm text-gray-800">
                New Delhi, Delhi 110001
              </p>
            </div>
            <div className="flex justify-start mb-1">
              <p className="text-sm text-gray-600 mb-1">Tel:</p>
              <p className="text-sm text-gray-800">+91 9999999999</p>
            </div>
            <div className="flex justify-start">
              <p className="text-sm text-gray-600 mb-1">Email:</p>
              <p className="text-sm text-gray-800">xyz@outlook.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-6 md:pl-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Pujas", "Chatdhara", "Astrology", "Kundli"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Refund Policy",
                "Terms & Conditions",
                "Privacy Policy",
                "Data Removal",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Connect with us on social media for updates, spiritual content,
              and community discussions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <a
              href="#"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <FaFacebookF />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700"
            >
              <FaInstagram />
              <span className="text-sm">Follow us on Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-red-600 hover:text-red-700"
            >
              <FaYoutube />
              <span className="text-sm">Subscribe to our YouTube channel</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <FaWhatsapp />
              <span className="text-sm">Join Our WhatsApp Community</span>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 Bharat Bhakti Yatra. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
