"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "18+", label: "Happy Clients" },
  { number: "6", label: "Categories" },
];

const projects = [
  {
    name: "Eric Colin For Marketing",
    description: "A modern full-stack digital marketing website designed for brand promotion, SEO optimization, with a clean, high-performance UI. Now Live",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    images: ["/project5/p1.png","/project5/p2.png","/project5/p3.png","/project5/p4.png","/project5/p5.png","/project5/p6.png","/project5/p7.png"],
    demo: "https://ericcollinformarketing.com",
    github: "https://github.com/Ali924-boop",
  },
  {
    name: "Maas Technical Cleaning Services",
    description: "Professional cleaning service website built with Next.js. Now Live",
    tech: ["React", "Next.js", "Tailwind CSS", "Express", "MongoDB"],
    images: ["/project2/p1.png","/project2/p2.png","/project2/p3.png","/project2/p4.png"],
    demo: "https://www.maastechnicalcleaning.com/",
    github: "https://github.com/Ali924-boop",
  },
  {
  name: "Buyrova",
  description: "A full-stack e-commerce platform with product listings, cart management, secure checkout, and order tracking. Built for a seamless shopping experience.",
  tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Cloudinary"],
  images: ["/project7/p7-1.png","/project7/p7-2.png","/project7/p7-3.png","/project7/p7-4.png","/project7/p7-5.png","/project7/p7-6.png","/project7/p7-7.png","/project7/p7-8.png","/project7/p7-9.png","/project7/p7-10.png","/project7/p7-11.png"],
  demo: "https://buyrova.vercel.app/",
  github: "https://github.com/Ali924-boop",
},
  {
    name: "Maza Juice App",
    description: "A modern juice delivery app built with React and Next.js.",
    tech: ["React", "Next.js", "Tailwind CSS", "Express", "MongoDB"],
    images: ["/project6/p1.png","/project6/p2.png","/project6/p3.png","/project6/p4.png","/project6/p5.png","/project6/p6.png","/project6/p7.png","/project6/p8.png","/project6/p9.png"],
    demo: "https://maza-juice.vercel.app/",
    github: "https://github.com/Ali924-boop/maza_juice",
  },
  {
    name: "Snaap Reel",
    description: "A short video sharing platform inspired by Reels and TikTok, built with modern web technologies.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Cloudinary"],
    images: ["/project3/p1.png","/project3/p2.png","/project3/p3.png","/project3/p4.png"],
    demo: "https://github.com/Ali924-boop/snap_reel",
    github: "https://github.com/Ali924-boop/snap_reel",
  },
  {
    name: "Master Cafe",
    description: "A modern full-stack cafe management web app.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    images: ["/Project1/p1.png","/Project1/p2.png","/Project1/p3.png","/Project1/p4.png"],
    demo: "https://master-cafe.vercel.app/",
    github: "https://github.com/Ali924-boop",
  },
  {
    name: "Codes Wear",
    description: "An E-commerce platform for clothing, built with modern web technologies to handle products, orders, and payments efficiently.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Cloudinary"],
    images: ["/project4/p1.png","/project4/p2.png","/project4/p3.png","/project4/p4.png"],
    demo: "https://codeswear-mauve.vercel.app/",
    github: "https://github.com/Ali924-boop",
  },
];

const ImageSlider = ({ images, projectName }: { images: string[]; projectName: string }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="w-full h-36 md:h-44 overflow-hidden rounded-xl relative shadow-lg bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${projectName} screenshot ${index + 1}`}
          className="w-full h-full object-cover rounded-xl absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-3 bg-white" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const maxIndex = projects.length - cardsPerView;
  const handlePrev = () => setScrollIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <div className="flex justify-center gap-10 mb-12 flex-wrap">
          {stats.map((stat, i) => (
            <motion.div key={i} className="flex flex-col items-center cursor-pointer" whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{stat.number}</p>
              <p className="text-gray-300 mt-1 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="relative px-8">
          <button onClick={handlePrev} disabled={scrollIndex === 0} className="absolute top-1/2 left-0 -translate-y-1/2 bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full shadow-lg z-20 disabled:opacity-40 transition">
            <FiChevronLeft size={24} />
          </button>
          <button onClick={handleNext} disabled={scrollIndex >= maxIndex} className="absolute top-1/2 right-0 -translate-y-1/2 bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full shadow-lg z-20 disabled:opacity-40 transition">
            <FiChevronRight size={24} />
          </button>
          <div className="overflow-hidden">
            <motion.div className="flex gap-6" animate={{ x: `-${scrollIndex * (100 / cardsPerView)}%` }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
              {projects.map((project, idx) => (
                <div key={idx} style={{ minWidth: `calc(${100 / cardsPerView}% - 1.5rem)` }} className="bg-white/10 border border-gray-700 rounded-xl p-4 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col">
                  <ImageSlider images={project.images} projectName={project.name} />
                  <h3 className="text-lg font-semibold mt-3 mb-1 text-blue-400">{project.name}</h3>
                  <p className="text-gray-300 mb-2 text-sm flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700/30 px-2 py-1 rounded-full text-xs text-gray-200 backdrop-blur-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-black rounded-md font-medium transition-colors text-xs">Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-gray-300 rounded-md text-white hover:bg-gray-700 transition-colors text-xs">GitHub</a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_: unknown, i: number) => (
            <button key={i} onClick={() => setScrollIndex(i)} className={`h-2 rounded-full transition-all ${i === scrollIndex ? "w-6 bg-blue-400" : "w-2 bg-gray-600"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;