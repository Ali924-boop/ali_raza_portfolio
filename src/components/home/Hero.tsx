"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-24 relative z-10 gap-12">

        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-xl tracking-wide text-blue-400 font-semibold mb-3">
            Full-Stack Developer • MERN • Next.js
          </h3>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Hi, I&apos;m <span className="text-blue-400">Ali Raza</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            I create clean, scalable, and visually stunning applications using 
            <span className="text-white font-semibold"> React, Next.js, Node.js, MongoDB</span>.  
            Dedicated to crafting premium UI/UX, smooth animations, and full-stack digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/projects"
              className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
            >
              View Portfolio
            </a>

            <a
              href="/contacts"
              className="px-7 py-3 rounded-lg border border-gray-400 hover:bg-white/10 text-lg font-medium backdrop-blur-xl transition-all duration-300"
            >
              ✉ Contact Me
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl">
            <Image
              src="/hero.png"
              alt="Ali Raza"
              width={300}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
