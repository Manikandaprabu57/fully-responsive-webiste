import React from 'react';
import { Home, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">InteriorCraft</h3>
                <p className="text-sm text-gray-400">Design Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating beautiful, functional spaces that reflect your personality and enhance your lifestyle through innovative interior design solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Interior Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Furniture Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Modular Wardrobes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Space Planning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wall Design & Décor</li>
              <li className="hover:text-white transition-colors cursor-pointer">Civil Works</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@interiorcraft.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Design Avenue, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg text-sm hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 InteriorCraft. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;