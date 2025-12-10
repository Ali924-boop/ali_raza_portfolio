"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Premium Stats
const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "18+", label: "Happy Clients" },
  { number: "6", label: "Categories" },
];

// Projects Data
const projects = [
  {
    name: "Master Cafe",
    description: "A modern full-stack cafe management web app.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    images: ["/Project1/p1.png", "/Project1/p2.png", "/Project1/p3.png", "/Project1/p4.png"],
    demo: "#",
    github: "#",
  },
  {
    name: "Maas Technical Cleaning Services",
    description: "Professional cleaning service website built with Next.js.",
    tech: ["React", "Next.js", "Tailwind CSS", "Express", "MongoDB"],
    images: ["/project2/p1.png", "/project2/p2.png", "/project2/p3.png", "/project2/p4.png"],
    demo: "https://www.maastechnicalcleaning.com/",
    github: "#",
  },
  {
    name: "Snaap Reel",
    description: "A short video sharing platform inspired by Reels and TikTok, built with modern web technologies.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Cloudinary"],
    images: ["/project3/p1.png", "/project3/p2.png", "/project3/p3.png", "/project3/p4.png"],
    demo: "#",
    github: "#",
  },
];

// Image Slider Component (SSR Safe)
const ImageSlider = ({ images, projectName }: { images: string[]; projectName: string }) => {
  const [index, setIndex] = useState(0);

  // Auto-slide using useEffect (only runs on client)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-44 md:h-52 overflow-hidden rounded-xl relative shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${projectName} screenshot ${index + 1}`}
          className="w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay for hover effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/30 flex items-center justify-center gap-5 rounded-xl transition-opacity"
      />
    </div>
  );
};

// Projects Component
const Projects: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-10 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text shadow-md">
                {stat.number}
              </p>
              <p className="text-gray-300 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/10 border border-gray-700 rounded-xl p-4 shadow-xl backdrop-blur-lg transition-shadow duration-300 cursor-pointer relative"
            >
              <ImageSlider images={project.images} projectName={project.name} />

              <h3 className="text-xl font-semibold mt-3 mb-1 text-blue-400">
                {project.name}
              </h3>

              <p className="text-gray-300 mb-3 text-sm md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/30 px-2 py-1 rounded-full text-xs text-gray-200 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-blue-400 hover:bg-yellow-600 text-black rounded-md font-medium transition-colors shadow-sm text-sm"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 border border-gray-300 rounded-md text-white hover:bg-gray-700 transition-colors shadow-sm text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
