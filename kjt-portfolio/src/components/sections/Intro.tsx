'use client';

import { motion } from 'framer-motion';
import { IntroSection } from '@/types';
import { ChevronLeft, Home } from 'lucide-react';
import Link from 'next/link';

interface IntroProps {
  section: IntroSection;
}

export default function Intro({ section }: IntroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="container-rtl">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 space-x-reverse text-sm">
            <Link href="/" className="flex items-center text-secondary-500 hover:text-primary-600 transition-colors duration-300">
              <Home className="w-4 h-4 ml-1" />
              صفحه اصلی
            </Link>
            <ChevronLeft className="w-4 h-4 text-secondary-400" />
            <span className="text-primary-600 font-medium">{section.title}</span>
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight"
          >
            {section.title}
          </motion.h1>
          
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-200 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
} 