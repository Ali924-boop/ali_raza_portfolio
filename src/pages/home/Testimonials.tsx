"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, CafeX",
    feedback:
      "Ali is an exceptional developer! He delivered the project on time with outstanding quality.",
    image: "/john.jpg",
  },
  {
    name: "Sara Smith",
    designation: "Founder, CleanTech",
    feedback:
      "Working with Ali was a pleasure. He understood our requirements perfectly and implemented a fantastic solution.",
    image: "/sara.jpg",
  },
  {
    name: "Michael Lee",
    designation: "Manager, TechCorp",
    feedback:
      "Highly professional and skilled developer. Our website looks amazing thanks to Ali.",
    image: "/michael1.jpg",
  },
];

const Testimonials = () => {
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
          What <span className="text-blue-400">Clients Say</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/5 border border-gray-700 rounded-xl p-6 shadow-lg backdrop-blur-xl cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={test.image}
                  alt={test.name}
                  width={65}
                  height={65}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">
                    {test.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{test.designation}</p>
                </div>
              </div>
              <p className="text-gray-300 italic relative pl-6">
                <FaQuoteLeft className="absolute left-0 top-0 text-blue-400 text-xl" />
                {test.feedback}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
