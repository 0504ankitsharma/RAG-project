import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Us */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">
              <Mail className="inline-block w-5 h-5 mr-2 text-orange-400" />
              <span>falhabit0@gmail.com</span>
            </p>
            <p>
              <span className="inline-block w-5 h-5 mr-2 text-orange-400">📞</span>
              +91 7878183180
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/falhabit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-orange-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/falhabit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-orange-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Location</h4>
            <p>Thapar University</p>
            <p>Patiala, Punjab (147001)</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-green-700 rounded-lg py-6 px-4 md:px-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter to get the latest updates and offers from FalHABIT.
          </p>
          <form className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 w-64"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="text-gray-300">&copy; 2024 FalHABIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
