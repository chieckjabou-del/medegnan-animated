import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Problèmes', href: '#problems' },
    { label: 'Mission', href: '#mission' },
    { label: 'Processus', href: '#process' },
    { label: 'Résultats', href: '#results' },
    { label: "Cas d'études", href: '#case-studies' },
    { label: 'Réseau', href: '#network' },
    { label: 'Tarification', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent whitespace-nowrap">
            MEDEGNAN
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="https://wa.me/22964280865?text=Bonjour%2C%20je%20souhaite%20faire%20le%20diagnostic%20de%20mon%20entreprise"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Diagnostic Gratuit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/22964280865?text=Bonjour%2C%20je%20souhaite%20faire%20le%20diagnostic%20de%20mon%20entreprise"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-4 rounded-lg text-center transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnostic Gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
