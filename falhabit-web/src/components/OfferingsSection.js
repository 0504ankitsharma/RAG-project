import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaSeedling, FaUserCheck, FaCalendarAlt } from 'react-icons/fa';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'Fresh Fruit Bowls & Salads',
      description: 'Daily subscription-based fresh fruit bowls and salads delivered to your doorstep.',
      icon: <FaAppleAlt className="text-orange-500 text-5xl mb-4" />,
    },
    {
      title: 'Nutritious Combos',
      description: 'Tasty and nutritious combinations of fresh fruits, premium nuts, and seeds.',
      icon: <FaSeedling className="text-green-500 text-5xl mb-4" />,
    },
    {
      title: 'Personalized Nutrition Plans',
      description: 'Tailored plans designed to meet your unique health goals and dietary needs.',
      icon: <FaUserCheck className="text-blue-500 text-5xl mb-4" />,
    },
    {
      title: 'Event Orders',
      description: 'Bulk orders for revitalizing parties, meetings, and celebrations with fresh fruit arrangements.',
      icon: <FaCalendarAlt className="text-purple-500 text-5xl mb-4" />,
    },
  ];

  return (
    <section id="offerings" className="py-16 bg-gradient-to-r from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">{offering.icon}</div>
              <h3 className="text-xl font-semibold text-center text-green-700 mb-2">{offering.title}</h3>
              <p className="text-gray-600 text-center">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
