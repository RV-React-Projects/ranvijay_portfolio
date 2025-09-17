'use client';
import { Facebook, Instagram, Linkedin, Github, Newspaper } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { siteConfig } from '@configs/AppConfigs';

export default function Footer() {
  const currentYear = moment().year();
  const segment = useSelectedLayoutSegment();
  const isNotFound = segment === '/_not-found';

  return isNotFound ? null : (
    <footer className="site_spacing bg-[#2C2C2C] text-[#CFCFCF] py-12 text-sm">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ABOUT ME */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">
            ABOUT ME
          </h2>
          <p className="leading-relaxed mb-4">
            I&apos;m currently working as a Software Developer focused on React
            Native, React, and full-stack development. I love building smooth
            UIs and solving complex problems. Let’s debug the world, one line at
            a time.
          </p>
          <div className="text-white text-2xl italic font-signature">
            Ranvijay Singh
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">
            NAVIGATION
          </h2>
          <ul className="space-y-2">
            {siteConfig.navItems.map(link => (
              <li key={link.id}>
                <Link href={`#${link.id}`} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTS */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">
            CONTACTS
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>📍</span> <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span> <span>ranvijaychauhan12@gmail.com</span>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/ranvijaykumarsingh"
            className="block mt-4 text-[#CFCFCF] underline underline-offset-2 hover:text-white"
            target="_blank"
            rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">
            FOLLOW ME HERE
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white">
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ranvijaykumarsingh"
              target="_blank"
              className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              className="hover:text-white">
              <Newspaper size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-white">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#444] pt-6 text-center text-xs text-[#888]">
        Made with ❤️ by{'  '}
        <span className="text-white font-semibold"> Ranvijay</span>{' '}
        &nbsp;|&nbsp; Copyright © {currentYear}
      </div>
    </footer>
  );
}
