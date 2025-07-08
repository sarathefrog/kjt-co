'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ServicesSection } from '@/types';
import { 
  Eye, 
  Users, 
  Wrench, 
  Package,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  section: ServicesSection;
}

const serviceIcons = {
  'بازرسی و نظارت': Eye,
  'مشاوره': Users,
  'ساخت و اجرا': Wrench,
  'تامین و تجهیز': Package,
};

export default function Services({ section }: ServicesProps) {
  return (
    <section id="services" className="section-padding section-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container-rtl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            خدمات{' '}
            <span className="text-orange-500" style={{ textShadow: '0 0 10px rgba(249, 115, 22, 0.3)' }}>
              تخصصی ما
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            ما خدمات جامع و تخصصی در حوزه‌های مختلف صنعتی ارائه می‌دهیم. 
            از جوشکاری تا مشاوره، کیفیت و تخصص ما تضمین شده است.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.items.map((item, index) => {
            const IconComponent = serviceIcons[item.title as keyof typeof serviceIcons] || CheckCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={item.link || '#'}>
                  <div className="card card-hover p-8 h-full relative overflow-hidden cursor-glow">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-orange-100 transition-colors duration-300" />
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description || 'خدمات تخصصی با بالاترین کیفیت و استانداردهای بین‌المللی'}
                      </p>
                      
                      {/* Arrow */}
                      <div className="flex items-center text-orange-600 group-hover:text-orange-500 transition-colors duration-300">
                        <span className="text-sm font-medium">مشاهده جزئیات</span>
                        <motion.div
                          className="mr-2"
                          whileHover={{ x: -5 }}
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="btn-primary text-lg px-12 py-5">
              درخواست مشاوره رایگان
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 