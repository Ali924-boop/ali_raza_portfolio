"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-4 md:px-6">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
              className="flex justify-center items-center gap-2 bg-blue-400 text-black font-semibold rounded-lg px-6 py-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center gap-6 text-gray-300 text-2xl">
            <motion.a whileHover={{ scale: 1.2, color: "#0A66C2" }} href="https://www.facebook.com/profile.php?id=61580827410019" target="_blank" rel="noopener noreferrer"><FaFacebook /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#0A66C2" }} href="https://www.linkedin.com/in/ali-dev-21b666397" target="_blank" rel="noopener noreferrer"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#333" }} href="https://github.com/Ali924-boop" target="_blank" rel="noopener noreferrer"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#E1306C" }} href="https://www.instagram.com/alidev14/" target="_blank" rel="noopener noreferrer"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#25D366" }} href="https://wa.me/923020178286" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
