'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  // { id: '#', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  // { id: 'testimonials', label: 'Testimonials' },
  // { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-[5vw] w-full">
        <Link
          href="#"
          className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-200 text-center">
          &lt;RKS&gt;
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-700 hover:text-black transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animations */}
      <div
        className={`md:hidden fixed top-14 left-0 w-full h-screen bg-white bg-opacity-90 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center space-y-6  md:hidden px-4 pb-4 bg-white shadow-md z-10000">
          {navLinks.map((link, index) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-gray-700 hover:text-black transition-all duration-500 opacity-0 animate-fadeIn
    border-b-2 border-l-2 border-r-2 border-transparent hover:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
