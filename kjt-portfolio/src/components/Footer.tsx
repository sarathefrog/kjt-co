'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type FooterProps = object;

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-rtl relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-2" style={{ textShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}>
                  کاوش جوش تهران
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  پیشگام در صنعت جوشکاری و مهندسی با بیش از ۱۰ سال تجربه در ارائه خدمات با کیفیت
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 space-x-reverse">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-orange-400 mb-6" style={{ textShadow: '0 0 8px rgba(249, 115, 22, 0.5)' }}>
                دسترسی سریع
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    تماس
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-orange-400 mb-6" style={{ textShadow: '0 0 8px rgba(249, 115, 22, 0.5)' }}>
                خدمات ما
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/welding" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    جوشکاری صنعتی
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    مشاوره مهندسی
                  </Link>
                </li>
                <li>
                  <Link href="/services/quality" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    کنترل کیفیت
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    آموزش و گواهینامه
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-orange-400 mb-6" style={{ textShadow: '0 0 8px rgba(249, 115, 22, 0.5)' }}>
                اطلاعات تماس
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-5 h-5 mt-1 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    تهران، خیابان ولیعصر، پلاک ۱۲۳
                  </p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-5 h-5 mt-1 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-5 h-5 mt-1 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    info@kjt-co.ir
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} کاوش جوش تهران. تمامی حقوق محفوظ است.
              </p>
              <div className="flex space-x-6 space-x-reverse text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  حریم خصوصی
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  شرایط استفاده
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 