"use client";

import { useEffect } from "react";
import Image from "next/image";

// Import your background image
import omarBackgroundImage from "@/assets/imgs/header.png";

export default function Hero() {
  useEffect(() => {
    const typingName = document.getElementById("typing-name");
    if (!typingName) return;

    const text = "Omar BradAI";
    let index = 0;
    typingName.innerHTML = "";

    const intervalId = setInterval(() => {
      if (index < text.length) {
        if (index === 9 || index === 10) {
          typingName.innerHTML += `<span style="color: rgb(0, 122, 255);">${text.charAt(
            index
          )}</span>`;
        } else {
          typingName.innerHTML += text.charAt(index);
        }
        index++;
      } else {
        clearInterval(intervalId);
        const cursor = document.querySelector(".cursor");
        if (cursor) cursor.classList.add("blinking");
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Layer 1: Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* The Next.js Image component for optimized backgrounds */}
        <Image
          src={omarBackgroundImage}
          alt="Background image of my portrait"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
        {/* The dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Layer 2: Your Content (add 'relative' and 'z-10' to bring it to the front) */}
      <div className="relative z-10 text-center fade-in px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hello, I am <span id="typing-name" className="text-white"></span>
          <span className="cursor"></span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mt-4 text-balance">
          AI & Software Developer
        </p>
        <a
          href="/resume/omar-bradai-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block btn-primary"
        >
          View My CV
        </a>
      </div>

      {/* Your existing styles for the cursor - no changes needed */}
      <style jsx>{`
        .cursor {
          display: inline-block;
          background-color: rgb(var(--accent-rgb));
          margin-left: 0.25rem;
          width: 4px;
          height: 3.5rem; /* Adjust height to match text size */
          vertical-align: bottom;
        }
        .blinking {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @media (min-width: 768px) {
          .cursor {
            height: 5.5rem;
          }
        }
        .btn-primary {
          background-color: rgb(var(--accent-rgb));
          color: white;
          font-weight: bold;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          transition: background-color 0.3s;
        }
        .btn-primary:hover {
          background-color: rgb(var(--accent-rgb), 0.8);
        }
      `}</style>
    </section>
  );
}
