"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaComments, FaTimes } from "react-icons/fa";

const BOT_IFRAME_URL = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
const BOT_CONFIG_URL =
  "https://files.bpcontent.cloud/2026/01/04/12/20260104124011-K7HUWY6C.json";

const FloatingCTAs: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bpLoaded, setBpLoaded] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ offsetX: number; offsetY: number } | null>(null);

  // --- Suppress Botpress undefined console errors safely ---
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      try {
        if (
          args.length === 1 &&
          typeof args[0] === "string" &&
          args[0].includes("inject.js")
        ) {
          return; // ignore Botpress inject errors
        }
        // Call original only if it's a valid function and args exist
        if (originalConsoleError && args.length > 0) {
          originalConsoleError(...args);
        }
      } catch (err) {
        // completely ignore any error here
      }
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // Toggle chat window
  const toggleChat = () => {
    setChatOpen((prev) => !prev);
    if (!bpLoaded) loadBotpress();
  };

  // Load Botpress script asynchronously
  const loadBotpress = () => {
    try {
      if (document.getElementById("bp-script")) {
        setBpLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.id = "bp-script";
      script.src = BOT_IFRAME_URL;
      script.async = true;

      script.onload = () => {
        try {
          // @ts-expect-error: botpressWebChat may not exist yet
          window.botpressWebChat?.init({
            host: "https://cdn.botpress.cloud",
            botId: BOT_CONFIG_URL,
          });
        } catch (err) {
          console.warn("Botpress init failed", err);
        }
        setBpLoaded(true);
      };

      script.onerror = () => console.warn("Botpress script failed to load.");
      document.body.appendChild(script);
    } catch (err) {
      console.warn("Botpress script error:", err);
    }
  };

  // Drag start
  const startDrag = (e: React.MouseEvent) => {
    if (!chatRef.current || window.innerWidth < 768) return;
    dragRef.current = {
      offsetX: e.clientX - chatRef.current.getBoundingClientRect().left,
      offsetY: e.clientY - chatRef.current.getBoundingClientRect().top,
    };
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
  };

  // Drag move
  const onDrag = (e: MouseEvent) => {
    if (!dragRef.current) return;
    setPosition({
      x: e.clientX - dragRef.current.offsetX,
      y: e.clientY - dragRef.current.offsetY,
    });
  };

  // Drag stop
  const stopDrag = () => {
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", stopDrag);
    dragRef.current = null;
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full
          bg-green-500 text-white text-xl md:text-2xl shadow-xl hover:scale-110 transition-all"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href={process.env.NEXT_PUBLIC_EMAIL_LINK}
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full
          bg-blue-500 text-white text-xl md:text-2xl shadow-xl hover:scale-110 transition-all"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <button
          onClick={toggleChat}
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full
          bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl md:text-2xl shadow-xl hover:scale-110 transition-all"
          aria-label="Chat with Ali"
        >
          <FaComments />
        </button>
      </div>

      {/* Chat Window */}
      {chatOpen && (
        <div
          ref={chatRef}
          style={{
            position: "fixed",
            bottom: window.innerWidth < 768 ? 0 : 100,
            right: window.innerWidth < 768 ? 0 : 24,
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: window.innerWidth < 768 ? "100%" : 360,
            height: window.innerWidth < 768 ? "70%" : 520,
            maxWidth: 360,
            maxHeight: "90%",
            zIndex: 50,
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            onMouseDown={startDrag}
            className="w-full flex justify-between items-center p-3 cursor-move select-none
            bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
          >
            <span>Ask Ali Raza</span>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white text-lg"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div
            id="bp-webchat-container"
            style={{ flex: 1, width: "100%", height: "100%" }}
          />
        </div>
      )}
    </>
  );
};

export default FloatingCTAs;
