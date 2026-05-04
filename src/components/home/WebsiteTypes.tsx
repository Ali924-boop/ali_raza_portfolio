"use client";

import React from "react";
import { FaShoppingCart, FaLaptopCode, FaBlog, FaChartLine, FaUsers, FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";

// Services / Types of Websites Data (match projects categories)
const websiteTypes = [
  {
    name: "E-commerce Websites",
    description: "Fully functional online stores with product management, secure payments, and high performance.",
    icon: <FaShoppingCart size={28} />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Portfolio Websites",
    description: "Showcase your work and skills with a sleek, modern, and responsive portfolio.",
    icon: <FaLaptopCode size={28} />,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Blogs & Content Websites",
    description: "Engaging blogs with SEO optimization, fast loading, and easy content management.",
    icon: <FaBlog size={28} />,
    gradient: "from-green-400 to-teal-500",
  },
  {
    name: "Marketing & Landing Pages",
    description: "High-converting landing pages for brands, products, and services.",
    icon: <FaChartLine size={28} />,
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    name: "Membership & Community Platforms",
    description: "Websites with user registration, dashboards, and community features.",
    icon: <FaUsers size={28} />,
    gradient: "from-pink-400 to-red-500",
  },
  {
    name: "Cafe & Food Websites",
    description: "Restaurant and cafe websites with menus, booking, and online ordering.",
    icon: <FaCoffee size={28} />,
    gradient: "from-orange-400 to-red-400",
  },
];

const WebsiteTypes: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold mb-12"
        >
          Types of <span className="text-blue-400">Websites I Build</span>
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {websiteTypes.map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`bg-gradient-to-tr ${type.gradient} p-6 rounded-2xl shadow-2xl relative overflow-hidden cursor-pointer`}
            >
              {/* Premium Glow & Shine Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-30 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 text-white mb-2 shadow-lg">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold">{type.name}</h3>
                <p className="text-gray-200 text-sm">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteTypes;
