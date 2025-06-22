"use client";

import { useState, useEffect, Key } from "react";
import Image, { StaticImageData } from "next/image";
import { Project } from "./utils/types";
import { projects } from "./consts/projects";
import { useAppContext } from "@/context/AppContext";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const filters = [
  { label: "All", value: "all" },
  { label: "Natural Language Processing", value: "nlp" },
  { label: "Machine Learning", value: "ml" },
  { label: "Academic Projects", value: "academic" },
];

function Modal({ project, onClose }: ModalProps) {
  if (!project) return null;
  const ModalContent = project.modalContent;

  const tvLineEffect: Variants = {
    hidden: {
      clipPath: "inset(50% 50% 50% 50%)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
    },
    exit: {
      clipPath: "inset(50% 0% 50% 0%)",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="fixed bg-black/60 backdrop-blur-sm inset-0 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* The main modal card with the TV animation */}
      <motion.div
        className="card border-none p-6 sm:p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
        variants={tvLineEffect}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-[var(--text-primary)] hover:text-accent text-4xl font-light leading-none"
          >
            &times;
          </button>
        </div>
        <div className="w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <ModalContent />
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projectToOpen, setProjectToOpen } = useAppContext();

  useEffect(() => {
    if (projectToOpen) {
      const project = projects.find(
        (p) => p.title.toLowerCase() === projectToOpen.toLowerCase()
      );
      setSelectedProject(project || null);
    } else {
      setSelectedProject(null);
    }
  }, [projectToOpen]);

  const handleCloseModal = () => {
    setProjectToOpen(null);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project: Project) => project.category === filter);

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
          {filteredProjects.map(
            (project: Project, index: Key | null | undefined) => (
              <button
                key={index}
                className="card group flex flex-col text-left"
                onClick={() => setProjectToOpen(project.title)}
              >
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-slate-700/50 text-slate-300 border border-slate-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            )
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
