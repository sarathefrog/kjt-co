'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999]">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow"
        >
          <span className="text-white text-2xl font-bold neon-cyan">کجت</span>
        </motion.div>
        
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-white mb-4"
        >
          کاوش جوش تهران
        </motion.h1>
        
        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-cyan-500/50 rounded-full"
            />
          </div>
        </motion.div>
        
        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400 mt-4"
        >
          در حال بارگذاری...
        </motion.p>
      </div>
    </div>
  );
} 