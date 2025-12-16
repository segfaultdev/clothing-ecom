'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Glassmorphic Navigation Component
 * 
 * Modern navigation bar with glassmorphism design featuring:
 * - Frosted glass backdrop blur effect
 * - Elegant neutral color palette
 * - Smooth animations and transitions
 * - Interactive hover states with subtle glow effects
 * - Mobile hamburger menu with slide animation
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { label: 'Products', href: '/products', ariaLabel: 'Browse all products' },
    { label: 'Categories', href: '/categories', ariaLabel: 'Browse product categories' },
    { label: 'Cart', href: '/cart', ariaLabel: 'View shopping cart' },
    { label: 'Account', href: '/profile', ariaLabel: 'View account profile' },
  ];

  return (
    <>
      {/* Subtle background gradient */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-40" />
      
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="relative backdrop-blur-2xl bg-white/60 rounded-3xl shadow-xl border border-white/40 overflow-hidden">
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50" />
            
            <div className="relative flex justify-between items-center h-16 px-6">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-2xl font-bold text-slate-900 hover:text-slate-700 hover:scale-105 transition-all duration-300"
                  aria-label="StyleHub home page"
                >
                  StyleHub
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex md:items-center md:space-x-1">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative px-5 py-2.5 text-sm font-medium text-slate-700 rounded-2xl transition-all duration-300 hover:text-slate-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
                    aria-label={link.ariaLabel}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg" />
                    
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl bg-slate-200" />
                    
                    <span className="relative">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="relative inline-flex items-center justify-center p-2.5 rounded-2xl text-slate-700 hover:bg-white/40 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400/50 transition-all duration-300"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle mobile menu"
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">
                    {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                  </span>
                  
                  <div className="relative w-6 h-6">
                    {/* Animated hamburger/close icon */}
                    <span
                      className={`absolute left-0 top-1 w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                        isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-2.5 w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0' : ''
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-4 w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                        isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
            <div
              className="backdrop-blur-2xl bg-white/60 rounded-3xl shadow-xl border border-white/40 p-4"
              id="mobile-menu"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="space-y-1">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="group block px-5 py-3 rounded-2xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-white/40 transition-all duration-300 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
                    role="menuitem"
                    aria-label={link.ariaLabel}
                    style={{
                      animation: isMobileMenuOpen ? `slideIn 0.4s ease-out ${index * 100}ms both` : 'none'
                    }}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-24" />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}