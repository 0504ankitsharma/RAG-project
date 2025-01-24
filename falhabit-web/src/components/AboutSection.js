import React from 'react';
import { motion } from 'framer-motion';
import solutionImage from '../assets/solution.png';
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-green-700 mb-4">About FalHABIT</h2>
              <p className="text-lg text-gray-700 mb-6">
                At <span className="text-orange-600 font-semibold">FalHABIT</span>, we are on a mission to transform India's eating habits. 
                By delivering fresh, nutritious, and affordable fruit products directly to your doorstep, 
                we aim to make healthy living accessible for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As a startup incubated under <span className="font-semibold">Venture Labs, Thapar University</span>, we blend 
                innovation and sustainability to create a lasting impact. Our offerings include personalized 
                nutrition plans, daily fruit boxes, and much more – all crafted to simplify your healthy lifestyle.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Join our journey to revolutionize the way India consumes fruits and be a part of this 
                <span className="text-green-600 font-semibold"> fruitful revolution.</span>
              </p>
              <a href="https://bit.ly/falhabit-pitch">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md">
                  Learn More
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right Image/Illustration */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={solutionImage}
                alt="FalHABIT Fresh Fruits"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
