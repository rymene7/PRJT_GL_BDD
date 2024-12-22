import logow from "../assets/logo-white.png";
import fb from "../assets/fb.png";
import X from "../assets/X.png";
import insta from "../assets/insta.png";
import lin from "../assets/lin.png";

import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0069AB] text-gray-300 font-source-serif-pro px-32 py-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src={logow} alt="DZ-Tabib" className="w-[200px]" />
            <p className="text-sm py-2 leading-5">
              Votre plateforme de référence pour trouver les meilleurs médecins
              spécialistes en Algérie.
            </p>
            <div className="flex space-x-2 py-4">
              <a href="#" className="hover:text-white transition-colors">
                <img src={fb} alt="fb" className="w-[25px]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <img src={X} alt="X" className="w-[25px]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <img src={insta} alt="insta" className="w-[25px]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <img src={lin} alt="in" className="w-[25px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rechercher un Médecin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Prendre RDV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Téléconsultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Espace Médecin
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white font-semibold mb-4">Spécialités</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cardiologie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dermatologie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pédiatrie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Toutes les spécialités
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} />
                <span>+213 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon size={16} />
                <span>contact@dz-tabib.dz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon size={16} />
                <span>Alger, Algérie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm">
              © {new Date().getFullYear()} DZ-Tabib. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
