'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { siteConfig } from '@configs/AppConfigs';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const isNotFound = segment === '/_not-found';

  return isNotFound ? null : (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-[#2C2C2C] shadow-md dark:text-white text-black hover:text-black transition-colors duration-200">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-[10%] w-full">
        <Link
          href="#home"
          className="text-2xl font-bold  hover:text-gray-700 transition-colors duration-200 text-center">
          ＜RV＞
        </Link>
        <div className="hidden md:flex">
          <nav className="md:flex space-x-6">
            {siteConfig.navItems.map(link => (
              <Link key={link.id} href={`#${link.id}`} className="">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4">
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden flex">
          <div className="px-4">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none">
            {menuOpen ? (
              <X size={24} color="currentColor" />
            ) : (
              <Menu size={24} color="currentColor" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animations */}
      <div
        className={`md:hidden fixed top-14 left-0 w-full pb-3.5 bg-white dark:bg-gray-900 bg-opacity-90 transform shadow-md ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center space-y-6  md:hidden px-4 pb-4 bg-white dark:bg-gray-900 z-10000">
          {siteConfig.navItems.map((link, index) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl  transition-all duration-500 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
