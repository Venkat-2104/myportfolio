import React from 'react';
import { Briefcase } from 'lucide-react';

const categories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C"]
  },
  {
    category: "Web Technologies",
    skills: ["Django", "React", "Node.js", "HTML/CSS", "TypeScript"]
  },
  {
    category: "Tools",
    skills: ["Git", "VScode", "AWS", "MongoDB"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
                    {skill}
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