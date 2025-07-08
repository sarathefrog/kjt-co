'use client';

import { motion } from 'framer-motion';
import { ServicesGridSection } from '@/types';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface ServicesGridProps {
  section: ServicesGridSection;
}

export default function ServicesGrid({ section }: ServicesGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-rtl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {section.title}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            خدمات تخصصی ما در حوزه‌های مختلف با بالاترین کیفیت و استانداردهای بین‌المللی
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card card-hover p-8 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary-100 transition-colors duration-300" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <CheckCircle className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-relaxed">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  {/* Arrow */}
                  <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    <span className="text-sm font-medium">جزئیات بیشتر</span>
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              نیاز به مشاوره تخصصی دارید؟
            </h3>
            <p className="text-secondary-600 mb-8 text-lg">
              کارشناسان ما آماده ارائه مشاوره رایگان و راهنمایی در انتخاب بهترین خدمات هستند
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:02112345678" className="btn-primary text-lg px-8 py-4">
                تماس مستقیم
              </a>
              <a href="mailto:info@kjt.ir" className="btn-secondary text-lg px-8 py-4">
                درخواست مشاوره
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 