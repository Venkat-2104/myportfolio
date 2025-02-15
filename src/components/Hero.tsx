import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 text-center px-4 mt-16">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Venkateshwarlu Cheddeep
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-8">Computer Science Student & Aspiring Software Engineer</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Venkat-2104" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/venkateshwarlu-cheddeep/" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:venkat2142004@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a
              href="Venkat's resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}