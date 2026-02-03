'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Academic', href: '#academic' },
    { name: 'Courses', href: '#courses' },
    { name: 'Training & Placement', href: '#placement' },
    { name: 'Facility', href: '#facility' },
    {
      name: 'More',
      href: '#',
      dropdown: [
        { name: 'Gallery', href: '/gallery' },
        { name: 'Events', href: '/events' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md text-gray-900'
          : 'bg-white/30 backdrop-blur-sm text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br rounded-full flex items-center justify-center object-cover text-white font-bold text-xl shadow-lg">
             <img src="https://www.gpsonbhadra.in/LOGO5.png" alt="gpsonbhadra" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-orange-900">GP Sonbhadra</span>
              <span className="text-sm">Polytechnic College</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name} <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white">
              Apply Now
            </Button>
          </div>

          {/* Mobile Nav Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full text-left px-4 py-3 font-medium flex justify-between items-center rounded-lg hover:bg-blue-50 hover:text-blue-600"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
