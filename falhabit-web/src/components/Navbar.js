import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'offerings', label: 'What We Offer' },
    { 
      id: 'apply', 
      label: 'Apply Now', 
      isLink: true, 
      link: 'https://bit.ly/falhabit', // Adding the URL for Apply Now
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="FalHABIT Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold text-green-700">FalHABIT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.isLink ? (
                // If it's a link, render it as a regular anchor tag
                <a
                  key={item.id}
                  href={item.link}
                  className={`text-gray-600 hover:text-green-700 transition-colors`}
                >
                  {item.label}
                </a>
              ) : (
                // Otherwise, handle scroll behavior
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-600 hover:text-green-700 transition-colors ${
                    currentSection === item.id ? 'text-green-700 font-semibold underline underline-offset-4' : ''
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-green-50 rounded-lg shadow-md mt-2"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  item.isLink ? (
                    // If it's a link, render it as a regular anchor tag
                    <a
                      key={item.id}
                      href={item.link}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-100 transition-colors`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    // Otherwise, handle scroll behavior
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-100 transition-colors ${
                        currentSection === item.id ? 'bg-green-100 font-semibold' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
