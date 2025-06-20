"use client";

import { useState } from "react";

const projects = [
  {
    title: "SynAI Writing Assistant",
    description:
      "A Google Docs extension for writing assistance, powered by Large Language Models.",
    tags: ["JavaScript", "LLM", "Python", "Google Workspace"],
    category: "nlp",
  },
  {
    title: "Tunisian ASR Model",
    description:
      "A Speech-to-Text AI model fine-tuned for the Tunisian Derja (dialect).",
    tags: ["Python", "ASR", "NLP", "Hugging Face"],
    category: "nlp",
  },
  {
    title: "Gaze Screen Tracker Assistant",
    description:
      "A real-time system to track gaze coordinates on a screen using computer vision.",
    tags: ["Python", "Pytorch", "ML", "Computer Vision"],
    category: "ml",
  },
  {
    title: "Automatic Parking Garage Door",
    description:
      "Combines facial recognition and IoT to simulate an automatic, secure garage door.",
    tags: ["Python", "Facial Recognition", "Arduino", "IOT"],
    category: "ml",
  },
  {
    title: "Tunisian ID Card OCR System",
    description:
      "An OCR system built with Flutter and Python to extract structured data from Tunisian ID cards.",
    tags: ["Python", "OCR", "Flutter", "API"],
    category: "academic",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Natural Language Processing", value: "nlp" },
  { label: "Machine Learning", value: "ml" },
  { label: "Academic Projects", value: "academic" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My AI Projects</h2>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === value
                  ? "text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
              style={{
                backgroundColor:
                  filter === value ? "rgb(var(--accent-rgb))" : "",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card flex flex-col">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-700/50 text-slate-300 border border-slate-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
