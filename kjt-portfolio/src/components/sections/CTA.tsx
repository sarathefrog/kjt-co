'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type CTAProps = object;

export default function CTA({}: CTAProps) {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-300 rounded-full"
        />
      </div>

      <div className="container-rtl relative z-10">
        <div className="py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              style={{
                textShadow: '0 0 20px rgba(249, 115, 22, 0.6)',
              }}
            >
              آماده شروع پروژه بعدی خود هستید؟
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              style={{
                textShadow: '0 0 10px rgba(249, 115, 22, 0.4)',
              }}
            >
              با تیم متخصص ما تماس بگیرید و از تجربه ۱۰ ساله ما در صنعت جوشکاری بهره‌مند شوید
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary text-lg px-12 py-5 neon-glow"
                >
                  درخواست مشاوره رایگان
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="tel:+982112345678" 
                  className="btn-outline text-lg px-12 py-5"
                >
                  تماس مستقیم
                </Link>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">کیفیت تضمین شده</h3>
                <p className="text-gray-400">تمام پروژه‌ها با بالاترین استانداردهای کیفیت انجام می‌شود</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">تجربه 30 ساله</h3>
                <p className="text-gray-400">بیش از 30 سال تجربه در صنعت جوشکاری و مهندسی</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">پشتیبانی ۲۴/۷</h3>
                <p className="text-gray-400">پشتیبانی شبانه‌روزی برای تمام پروژه‌ها</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 