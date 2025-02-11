import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="bg-transparent">
            <img className="h-16" src={isScrolled ? 'logo1.png' : 'logo2.png'} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            {['about', 'education', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-blue-500 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['about', 'education', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-900 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}