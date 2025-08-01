import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building, Wrench, Settings, Image, Briefcase, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Company', href: '/company', icon: Building },
    { name: 'What We Do', href: '/what-we-do', icon: Wrench },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Gallery', href: '/gallery', icon: Image },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow">
              <img src={logo} alt="HIFI-TRENDZ logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">HIFI‑TRENDZ</h1>
              <p className="text-xs text-gray-600">Design Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
