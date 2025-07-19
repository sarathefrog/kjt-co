'use client';

import { motion } from 'framer-motion';

interface ServiceSectionSakhtVaEjraProps {
  title: string;
  description?: string;
  accentColor?: string; // e.g. 'orange', 'green', etc.
  image?: string;
  projects?: string[];
  variant?: 'light' | 'dark';
}

export default function ServiceSectionSakhtVaEjra({ title, description, accentColor = 'orange', image, projects, variant = 'dark' }: ServiceSectionSakhtVaEjraProps) {
  // Only allow orange, green, purple, red, yellow
  const accentClass = accentColor === 'orange' ? 'bg-orange-400' : accentColor === 'green' ? 'bg-green-400' : accentColor === 'purple' ? 'bg-purple-400' : accentColor === 'red' ? 'bg-red-400' : accentColor === 'yellow' ? 'bg-yellow-300' : 'bg-orange-400';
  const sectionBg = variant === 'light' ? 'bg-white' : 'bg-black';
  const contentBg = variant === 'light' ? 'bg-white/90' : 'bg-gray-900/80';
  const titleColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const descColor = variant === 'light' ? 'text-gray-700' : 'text-orange-100';
  const projectColor = variant === 'light' ? 'text-gray-800' : 'text-orange-200';
  return (
    <section className={`relative py-20 md:py-32 ${sectionBg} overflow-hidden`}>
      {/* Animated blurred accent shape */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.15 }}
        animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-32 -left-32 w-96 h-96 ${accentClass} rounded-full blur-3xl z-0`}
      />
      <div className="container-rtl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12 ${contentBg} rounded-3xl shadow-2xl border-none md:pl-0`}
        >
          {/* Left accent bar for desktop */}
          <div className={`hidden md:block w-2 h-40 rounded-full ${accentClass} mr-4`} />
          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0"
            >
              <img src={image} alt={title} className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-72 lg:h-80" />
            </motion.div>
          )}
          {/* Content */}
          <div className="flex-1 text-center md:text-right">
            <h3 className={`text-2xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight ${titleColor}`}>
              {title}
            </h3>
            <p className={`${descColor} text-lg leading-relaxed min-h-[2.5em] mb-6`}>
              {description || 'توضیحات این بخش به زودی اضافه خواهد شد.'}
            </p>
            {/* Projects List */}
            {projects && projects.length > 0 && (
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className={`${projectColor} text-base md:text-lg space-y-2 mt-6 text-right mx-auto max-w-xl`}
              >
                {projects.map((project, idx) => (
                  <motion.li
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-2"
                  >
                    <span className={`inline-block w-2 h-2 rounded-full ${accentClass}`}></span>
                    <span>{project}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 