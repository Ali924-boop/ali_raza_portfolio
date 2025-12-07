"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Services Data
const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and modern websites with React, Next.js, Node.js, and MongoDB.",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Develop cross-platform mobile apps using React Native with smooth UI/UX.",
    icon: <FaMobileAlt className="text-blue-400 text-3xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Create visually appealing designs using Tailwind CSS and modern design principles.",
    icon: <FaPalette className="text-blue-400 text-3xl" />,
  },
  {
    title: "Next.js Projects",
    description:
      "Specialized in Next.js apps with dynamic routing, API integration, and SEO optimization.",
    icon: <SiNextdotjs className="text-blue-400 text-3xl" />,
  },
  {
    title: "Tailwind CSS Styling",
    description:
      "Premium and responsive styling for web apps using Tailwind CSS.",
    icon: <SiTailwindcss className="text-blue-400 text-3xl" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12"
        >
          My <span className="text-blue-400">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/5 border border-gray-700 rounded-xl p-6 shadow-lg backdrop-blur-xl cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
