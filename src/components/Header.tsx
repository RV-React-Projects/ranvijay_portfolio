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
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white fixed w-full top-0 z-50">
      <Link
        href="#"
        className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-200 text-center align-middle"
      >
        {'<RKS>'}
      </Link>
      <nav className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
