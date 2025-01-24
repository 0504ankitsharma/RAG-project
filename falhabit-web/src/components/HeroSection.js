import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';


const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic
    console.log('Subscribed with email:', email);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-green-700 mb-6 mt-8">
            Experience the Fruitful Revolution
          </h1>
          <p className="text-xl text-gray-600 mb-8 mt-10">
            India's D2C Everything Fruits Brand. Transforming lifestyles by delivering premium quality, fresh fruits.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://bit.ly/falhabit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-20 py-3 rounded-full hover:bg-orange-600 flex items-center mt-5 ">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
            <a
              href="https://bit.ly/falhabit-pitch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-green-200 bg-green-200 px-20 text-green-800 font-bold py-3 rounded-full hover:bg-green-50 mt-5">
                Learn More
              </button>
            </a>
            
          </div>
           {/* Email Subscription */}
         <div className="relative mt-10">
            <form onSubmit={handleEmailSubscribe} className="mb-8 flex">
              <input 
                type="email"
                placeholder="Enter your email for personalized nutrition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-2 py-3 border border-green-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      

         {/* Right Content - Hiring & Engagement Card */}
          <div className="relative mt-10">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Join the Fruitful Revolution!</h2>
              <p className="text-gray-600 text-center mb-6">
                Incubated at Venture Lab, Thapar University. Be part of our mission to transform India's nutrition landscape.
              </p>
              
              {/* Engagement Options */}
              <div className="space-y-4  pt-5 mb-6">
                <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Corporate Wellness</p>
                    <span className="text-sm text-gray-600">Customized nutrition plans</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Nutrition Consultation</p>
                    <span className="text-sm text-gray-600">Personalized diet tracking</span>
                  </div>
                </div>
              </div>
              
              {/* Apply/Engage Button */}
              <a 
                href="https://bit.ly/falhabit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
                  Engage Now
                </button>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
