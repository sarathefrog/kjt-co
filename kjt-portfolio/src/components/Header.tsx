'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { getServicePages } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicePages = getServicePages();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 md:px-8 lg:px-16">
          {/* Mobile Layout (Logo + Hamburger only) */}
          <div className="lg:hidden flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link href="/" className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}> 
                کاوش جوش تهران
              </Link>
            </motion.div>

            {/* Hamburger Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            </motion.button>
          </div>

          {/* Desktop Layout (3-column grid) */}
          <div className="hidden lg:grid grid-cols-3 items-center h-20">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-3">
              {/* Hamburger Menu Button (always visible) */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              </motion.button>
              
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 space-x-reverse"
              >
                <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}> 
                  کاوش جوش تهران
                </Link>
              </motion.div>
            </div>

            {/* Center: Navigation Items */}
            <nav className="flex justify-center items-center space-x-8 space-x-reverse">
              {servicePages.map((page, index) => (
                <motion.div
                  key={page.slug}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={page.url}
                    className={`nav-link relative group ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {page.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right: Language Switcher + CTA Button */}
            <div className="flex justify-end items-center gap-4">
              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </motion.button>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary text-sm px-6 py-2"
                >
                  درخواست مشاوره
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="absolute top-8 right-8 z-10">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <X className="w-8 h-8 text-white" />
                </motion.button>
              </div>

              {/* Main Menu Content */}
              <div className="flex-1 flex flex-col justify-center items-center px-8">
                <div className="w-full max-w-4xl">
                  {/* Menu Items */}
                  <nav className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {servicePages.map((page, index) => (
                      <motion.div
                        key={page.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link
                          href={page.url}
                          onClick={closeMenu}
                          className="group block"
                        >
                          <div className="text-4xl md:text-5xl font-bold text-white hover:text-orange-400 transition-colors duration-300 mb-2">
                            {page.title}
                          </div>
                          <div className="w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Additional Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16"
                  >
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="text-2xl font-semibold text-white/80 hover:text-orange-400 transition-colors duration-300"
                    >
                      درباره ما
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="text-2xl font-semibold text-white/80 hover:text-orange-400 transition-colors duration-300"
                    >
                      تماس با ما
                    </Link>
                  </motion.div>

                  {/* Language Selector */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-center mb-16"
                  >
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                      <button className="text-white font-medium px-4 py-2 rounded-full bg-orange-500">
                        فارسی
                      </button>
                      <button className="text-white/70 hover:text-white font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-200">
                        English
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="border-t border-white/20 bg-black/20 backdrop-blur-sm"
              >
                <div className="max-w-4xl mx-auto px-8 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/70">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-sm">۰۲۱-۱۲۳۴۵۶۷۸</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <span className="text-sm">info@kjt-co.ir</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-400" />
                      <span className="text-sm">تهران، خیابان ولیعصر</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 