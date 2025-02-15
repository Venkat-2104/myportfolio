import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center mb-8">
            <Mail className="w-6 h-6 mr-2 text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact</h2>
          </div>
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="mailto:venkat2142004@gmail.com"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/venkateshwarlu-cheddeep/"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}