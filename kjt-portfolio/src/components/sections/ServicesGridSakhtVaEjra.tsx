'use client';

import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  description?: string;
}

interface ServicesGridSakhtVaEjraProps {
  title: string;
  items: ServiceItem[];
}

export default function ServicesGridSakhtVaEjra({ title, items }: ServicesGridSakhtVaEjraProps) {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-rtl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">
            {title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group"
            >
              <div className="bg-gray-800 border-l-4 border-orange-500 p-8 h-full rounded-2xl shadow-lg relative overflow-hidden transition-all duration-300 group-hover:shadow-orange-400/30">
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 leading-relaxed">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-orange-100 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 