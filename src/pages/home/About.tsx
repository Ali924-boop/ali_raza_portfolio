"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { HiOutlineTv } from "react-icons/hi2";

// Downloaded Lottie JSON from LottieFiles, saved in public/lottie
import developerAnimation from "../../../public/lottie/Software Devlopment.json";

const About: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 md:w-80 md:h-80 bg-purple-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Intro + Lottie */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              I’m <span className="font-semibold text-white">Ali Raza</span>, a
              <span className="text-blue-400 font-semibold">
                {" "}
                Full-Stack Web Developer
              </span>
              dedicated to building modern, fast, and functional web
              applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/public/aliraza_resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement("a");
                  link.href = "/Ali_Raza_CV.pdf";
                  link.download = "Ali_Raza_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-3 bg-blue-400 hover:bg-yellow-600 text-black hover:text-white rounded-lg font-medium transition-all duration-300"
              >
                Download CV
              </a>

              <a
                href="/contacts"
                aria-label="Hire Me"
                className="px-6 py-3 border border-gray-300 hover:bg-gray-700 rounded-lg text-white font-medium transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 max-w-md mx-auto"
          >
            <Lottie animationData={developerAnimation} loop />
          </motion.div>
        </div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 mt-16"
        >
          {/* What I Do */}
          <div className="bg-white/5 border border-gray-700 p-8 rounded-xl shadow-lg backdrop-blur-xl hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
              What I Do
            </h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✔ Frontend Development (React, Next.js, Tailwind CSS)</li>
              <li>✔ Backend Development (Node.js, Express.js, MongoDB)</li>
              <li>✔ Full-Stack Web Applications</li>
              <li>✔ API Integrations & Authentication</li>
              <li>✔ Animations with Framer Motion & Lottie</li>
            </ul>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-white/5 border border-gray-700 p-8 rounded-xl shadow-lg backdrop-blur-xl hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <FaReact className="text-blue-400" />,
                  name: "React.js / Next.js",
                },
                {
                  icon: <LiaNode className="text-green-400" />,
                  name: "Node.js",
                },
                {
                  icon: <SiMongodb className="text-green-400" />,
                  name: "MongoDB / Databases",
                },
                {
                  icon: <RiTailwindCssFill className="text-blue-400" />,
                  name: "Tailwind CSS / UI",
                },
                {
                  icon: <FaGithub className="text-gray-300" />,
                  name: "Git & GitHub",
                },
                {
                  icon: <GoGear className="text-gray-300" />,
                  name: "API Integration",
                },
                {
                  icon: <HiOutlineTv className="text-gray-300" />,
                  name: "UI/UX Design",
                },
                { icon: null, name: "Responsive Layouts" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/60 rounded-lg px-3 py-2 shadow-md transition-colors duration-300 cursor-pointer"
                >
                  {skill.icon && skill.icon}
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white/5 border border-gray-700 p-10 rounded-xl backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            My Mission
          </h3>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
            I aim to create high-performance digital solutions with clean code,
            modern UI/UX, and premium user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
