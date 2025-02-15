import React from 'react';
import { User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center mb-8">
            <User className="w-6 h-6 mr-2 text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col gap-6 sm:gap-8 items-center md:items-start">
              <img
                src="profile_img.jpg"
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover ring-4 ring-blue-900 shrink-0"
              />
              <div>
                <p className="text-gray-300 leading-relaxed text-center md:text-left text-sm sm:text-base">
                  I'm a Forth-Year Computer Science student at Vasavi College of Engineering with a passion for software development.
                  I love solving complex problems and building applications
                  that make a difference.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}