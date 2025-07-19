'use client';

import { motion } from 'framer-motion';

interface SakhtVaEjraIntroProps {
  title: string;
  content: string;
}

export default function SakhtVaEjraIntro({ title, content }: SakhtVaEjraIntroProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900 overflow-hidden">
      {/* Animated Blurred Orange Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-30 z-0"
      />
      <div className="container-rtl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-orange-100 mb-4 leading-relaxed"
          >
            {content}
          </motion.p>
        </div>
      </div>
    </section>
  );
} 