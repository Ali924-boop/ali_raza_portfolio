"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success / error / empty

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔹 Future: connect to API / send email
    console.log(formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-gray-700 backdrop-blur-xl rounded-xl shadow-lg p-8 md:p-12 flex flex-col gap-6"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-400 text-black font-semibold rounded-lg px-6 py-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Status Message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-green-400 font-medium text-center"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-6 text-gray-300 text-2xl">
            <motion.a
              whileHover={{ scale: 1.2, color: "#0A66C2" }}
              href="https://www.facebook.com/profile.php?id=61580827410019"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
              whileHover={{ scale: 1.2, color: "#333" }}
              href="https://github.com/Ali924-boop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#E1306C" }} // Instagram Pink
              href="https://www.instagram.com/alidev14/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#25D366" }} // WhatsApp Green
              href="https://wa.me/923020178286" // WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={24} />
            </motion.a>
          </div>

          {/* Optional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-center text-gray-400"
          >
            <p>
              Email:{" "}
              <a
                href="mailto:alirazasandha5@gmail.com"
                className="text-blue-400 hover:underline"
              >
                alirazasandha5@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <a
                href="tel:+923020178286"
                className="text-blue-400 hover:underline"
              >
                +92 302 0178286
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
