import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    "title": "MyView",
    "description": "A Django-based movie review website where users can share and explore reviews of their favorite films.",
    "tech": ["Django", "Python", "Amazon EC2", "SQLlite"],
    "image": "myview.webp",
    "link": "http://13.233.18.108/"
  },
  {
    "title": "Snap-n-Notify",
    "description": "An AI-powered application that detects potholes using machine learning and automatically posts alerts on X (formerly Twitter) to notify authorities.",
    "tech": ["Python", "Flask", "Machine Learning", "Twitter API"],
    "image": "snap-n-notify.webp",
    "link": "https://github.com/Venkat-2104/Snap-N-Notify"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center mb-8">
            <Code className="w-6 h-6 mr-2 text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} className="h-full">
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="relative h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm sm:text-base group"
                  >
                    View Project 
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}