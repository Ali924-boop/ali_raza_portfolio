"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogs, Blog } from "../data";
import { motion } from "framer-motion";

interface WindowWithAds extends Window {
  adsbygoogle?: unknown[];
}

const SlugPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params as { slug: string };

  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    const win = window as WindowWithAds;
    if (win.adsbygoogle) {
      try {
        win.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  if (!blog)
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Blog not found.</p>
      </main>
    );

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen py-16 px-6">
      {/* Featured Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={blog.image}
        alt={blog.title}
        className="rounded-xl mb-10 mt-10 mx-auto max-h-80 md:max-h-96 object-cover shadow-xl"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-3 text-blue-400"
      >
        {blog.title}
      </motion.h1>

      {/* Meta */}
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-400 text-center mb-10"
      >
        {blog.date} • {blog.readTime}
      </motion.p>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto prose prose-white text-lg leading-relaxed space-y-5"
      >
        <p>{blog.excerpt}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          fermentum justo nec lorem finibus, sed luctus mauris elementum.
        </p>
        <p>
          Curabitur a lorem ut libero ultricies gravida. Proin commodo pulvinar
          dui, et efficitur lorem volutpat ac.
        </p>
      </motion.div>

      {/* AdSense Placeholder */}
      <div className="my-12 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1169411304409191"
          data-ad-slot="3521087733"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/blogs")}
          className="px-5 py-2 bg-blue-400 hover:bg-blue-500 text-black rounded-md font-medium transition-all duration-300"
        >
          ← Back to Blogs
        </button>
      </div>
    </main>
  );
};

export default SlugPage;
