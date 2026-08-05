import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MEDEGNAN</h3>
            <p className="text-sm leading-relaxed">
              Transformation stratégique et audit d'entreprise. Nous aidons les entrepreneurs à récupérer l'argent caché de leur entreprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-green-500 transition-colors">
                  Problèmes
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-green-500 transition-colors">
                  Processus
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-500 transition-colors">
                  Tarification
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pricing" className="hover:text-green-500 transition-colors">
                  Diagnostic Standard
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-500 transition-colors">
                  Diagnostic Avancé
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-500 transition-colors">
                  Diagnostic Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="https://wa.me/22964280865" className="hover:text-green-500 transition-colors">
                  +229 64 28 08 65
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                <a href="mailto:contactmedegnan@gmail.com" className="hover:text-green-500 transition-colors">
                  contactmedegnan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span>Bénin, Afrique de l'Ouest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p>
                &copy; {currentYear} MEDEGNAN. Tous droits réservés.
              </p>
            </div>
            <div className="md:text-right space-x-4">
              <a href="/mentions-legales" className="hover:text-green-500 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
