import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <User className="w-6 h-6 mr-2 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="profile_img.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 ring-4 ring-blue-900"
            />
            <div>
              <p className="text-gray-300 leading-relaxed">
                I'm a Forth-Year Computer Science student at Vasavi College of Engineering with a passion for software development.
                I love solving complex problems and building applications
                that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}