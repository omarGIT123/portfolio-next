"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const typingName = document.getElementById("typing-name");
    if (!typingName) return;

    const text = "Omar Bradai";
    let index = 0;
    typingName.innerHTML = ""; // Clear initial content

    const intervalId = setInterval(() => {
      if (index < text.length) {
        typingName.innerHTML += text.charAt(index);
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
      className="min-h-screen flex items-center justify-center pt-16"
    >
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
      `}</style>
      <div className="text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hello, I am <span id="typing-name" className="text-white"></span>
          <span className="cursor"></span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-4 text-balance">
          AI & Software
        </p>
        <a href="/cv.pdf" download className="mt-8 inline-block btn-primary">
          Download My CV
        </a>
      </div>
    </section>
  );
}
