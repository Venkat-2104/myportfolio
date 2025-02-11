import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Code className="w-6 h-6 mr-2 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col min-h-[400px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}