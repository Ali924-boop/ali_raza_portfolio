"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogs, Blog } from "./data";

// Blog Card Component
const BlogCard: React.FC<{ blog: Blog; isSide?: boolean }> = ({ blog, isSide }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/5 p-2 md:p-3 rounded-lg transition-all cursor-pointer flex flex-col
                  ${isSide ? "shadow-lg ring-1 ring-blue-500/40" : "hover:shadow-xl"}`}
      onClick={() => router.push(`/blogs/${blog.slug}`)}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="rounded-lg mb-2 w-full object-cover max-h-48"
      />
      <h2 className="text-base md:text-lg font-semibold text-blue-400 mb-1">{blog.title}</h2>
      <p className="text-gray-300 text-xs md:text-sm mb-2">{blog.excerpt}</p>
      <div className="mt-auto px-2 py-1 bg-blue-400 hover:bg-blue-500 text-black rounded-md text-center text-xs font-semibold transition">
        Read Article
      </div>
    </motion.div>
  );
};

// Blogs Page Component
const BlogsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-4 min-h-screen">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 mt-6 bg-clip-text text-transparent 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg"
      >
        Blog & Insights
      </motion.h1>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {currentBlogs.map((blog, idx) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
            isSide={idx === 0 || idx === currentBlogs.length - 1} // side cards glow
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-black rounded-lg transition"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-3 py-1 rounded-lg transition ${
              currentPage === num + 1
                ? "bg-blue-500 text-black"
                : "bg-white/10 text-white"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-black rounded-lg transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogsPage;
