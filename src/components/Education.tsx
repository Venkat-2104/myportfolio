import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="bg-black rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Vasavi College of Engineering</h3>
            <p className="text-gray-400">Bachelor of Engineering in Computer Science</p>
            <p className="text-blue-400">Expected Graduation: 2025</p>
            <p className="text-gray-400 mt-2">CGPA: 8.43</p>
          </div>
        </div>
      </div>
    </section>
  );
}