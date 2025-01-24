import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaSeedling, FaRegSadCry } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      value: '67%',
      label: 'Urban Indians struggle with balanced nutrition',
      icon: <FaAppleAlt className="text-orange-500 text-5xl mb-4" />,
    },
    {
      value: '3rd',
      label: 'Globally in unhealthy eating habits',
      icon: <FaRegSadCry className="text-red-500 text-5xl mb-4" />,
    },
    {
      value: '9/10',
      label: 'Working professionals skip fruits and salads',
      icon: <FaSeedling className="text-green-500 text-5xl mb-4" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-700 via-green-600 to-green-500">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            The Health Crisis We're Tackling
          </motion.h2>
          <motion.p
            className="text-lg text-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            FalHABIT is here to address India's alarming nutrition gaps with fresh, healthy, and affordable solutions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div>{stat.icon}</div>
              <h3 className="text-5xl font-extrabold text-green-700 mb-2">{stat.value}</h3>
              <p className="text-lg text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
