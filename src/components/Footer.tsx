"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook ,FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 via-black to-gray-900 text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Logo / Name with tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400">Ali Raza</h2>
          <p className="text-gray-400 mt-1 text-sm md:text-base max-w-xs">
            Full-Stack Developer | Creating premium websites & web apps.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 text-gray-300 text-sm md:text-base"
        >
          <a href="/home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
          <a href="/contacts" className="hover:text-blue-400 transition-colors">Contacts</a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex gap-5 text-2xl text-gray-300"
        >
             <motion.a
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            href="https://www.facebook.com/profile.php?id=61580827410019"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            href="www.linkedin.com/in/ali-dev-21b666397"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#E1306C" }}
            href="https://www.instagram.com/alidev14/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#25D366" }}
            href="https://wa.me/923020178286"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#fff" }}
            href="https://github.com/Ali924-boop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-center text-gray-500 text-sm mt-6"
      >
        &copy; {new Date().getFullYear()} Ali Raza. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
