"use client";

import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingCTAs = () => {
  return (
    <>
      {/* Container for spacing and responsiveness */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/+923020178286"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full
            bg-gradient-to-tr from-green-400 to-green-500 text-white text-xl md:text-2xl
            shadow-lg md:shadow-2xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp />
        </a>

        {/* Email */}
        <a
          href="mailto:alirazasandha5@gmail.com"
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full
            bg-gradient-to-tr from-blue-500 to-blue-400 text-white text-xl md:text-2xl
            shadow-lg md:shadow-2xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
          aria-label="Email Us"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
};

export default FloatingCTAs;
