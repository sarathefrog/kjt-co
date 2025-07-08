'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/types';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface HeroProps {
  section: HeroSection;
}

export default function Hero({ section }: HeroProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });
  
  // Show company name for homepage, page title for other pages
  const displayTitle = isHomepage ? 'کاوش جوش تهران' : section.title;

  // Generate multiple spark elements
  const sparks = Array.from({ length: 20 }, (_, i) => i);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-dark hero-gradient">
      {/* Enhanced Welding Sparks Background */}
      <div className="absolute inset-0">
        {/* Welding Sparks GIF Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
          <img 
            src="/welding-sparks.gif" 
            alt="Welding sparks animation" 
            className="w-full h-full object-cover mix-blend-screen opacity-80 blur-[2px]" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        </div>

        {/* Main Welding Fire Core */}
        <motion.div
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.4, 0.8, 0.3, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-orange-600 via-orange-500 to-transparent rounded-full blur-3xl opacity-40"
        />

        {/* Secondary Fire Layers */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 1.5, 1, 0.8],
            opacity: [0.2, 0.6, 0.9, 0.4, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-orange-500 via-orange-400 to-transparent rounded-full blur-2xl opacity-30"
        />

        {/* Flying Sparks */}
        {sparks.map((spark, index) => (
          <motion.div
            key={spark}
            initial={{
              x: Math.random() * windowDimensions.width,
              y: windowDimensions.height + 50,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * windowDimensions.width,
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              boxShadow: '0 0 6px rgba(249, 115, 22, 0.8), 0 0 12px rgba(249, 115, 22, 0.4)',
            }}
          />
        ))}

        {/* Spark Bursts */}
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
          className="absolute top-1/3 left-1/4 w-4 h-4 bg-orange-300 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(249, 115, 22, 1), 0 0 40px rgba(249, 115, 22, 0.6)',
          }}
        />

        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.2
          }}
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-orange-400 rounded-full"
          style={{
            boxShadow: '0 0 15px rgba(249, 115, 22, 1), 0 0 30px rgba(249, 115, 22, 0.6)',
          }}
        />

        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.8
          }}
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-orange-500 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(249, 115, 22, 1), 0 0 20px rgba(249, 115, 22, 0.6)',
          }}
        />

        {/* Heat Distortion Effect */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-orange-400/10"
        />

        {/* Animated Orange Circles */}
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
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl neon-glow"
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
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full neon-glow"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-300 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full"
        />
      </div>

      <div className="container-rtl relative z-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Welding Fire Animation Behind Text */}
          <div className="relative mb-8">
            {/* Fire Layer 1 - Core Flame */}
            <motion.div
              animate={{
                scale: [1, 1.2, 0.8, 1.1, 1],
                opacity: [0.6, 1, 0.4, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 rounded-full blur-3xl opacity-60"
              style={{
                filter: 'blur(40px)',
                transform: 'translateY(20px)',
              }}
            />
            
            {/* Fire Layer 2 - Middle Flame */}
            <motion.div
              animate={{
                scale: [0.8, 1.1, 1.3, 0.9, 0.8],
                opacity: [0.4, 0.8, 1, 0.6, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="absolute inset-0 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-300 rounded-full blur-2xl opacity-50"
              style={{
                filter: 'blur(30px)',
                transform: 'translateY(10px)',
              }}
            />
            
            {/* Fire Layer 3 - Outer Flame */}
            <motion.div
              animate={{
                scale: [1.2, 0.9, 1.1, 1.3, 1.2],
                opacity: [0.3, 0.7, 0.9, 0.5, 0.3],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="absolute inset-0 bg-gradient-to-t from-orange-400 via-orange-300 to-orange-200 rounded-full blur-xl opacity-40"
              style={{
                filter: 'blur(20px)',
                transform: 'translateY(5px)',
              }}
            />

            {/* Spark Burst Behind Text */}
            <motion.div
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-radial from-orange-300 via-orange-400 to-transparent rounded-full opacity-30"
              style={{
                filter: 'blur(15px)',
              }}
            />
          </div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight relative z-10"
            style={{
              textShadow: `
                0 2px 16px rgba(0,0,0,0.85),
                0 0 32px rgba(249,115,22,0.7),
                0 0 8px rgba(249,115,22,0.5),
                0 0 2px #000
              `,
            }}
          >
            {displayTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-12 leading-relaxed max-w-4xl mx-auto relative z-10"
            style={{
              textShadow: '0 0 10px rgba(249, 115, 22, 0.6)',
            }}
          >
            {section.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {section.cta && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center relative z-10 w-full max-w-md mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto"
              >
                <Link href={section.cta.link} className="btn-primary text-lg px-12 py-5 neon-glow w-full md:w-auto block text-center whitespace-nowrap">
                  {section.cta.label}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto"
              >
                <Link href="#services" className="btn-outline text-lg px-12 py-5 w-full md:w-auto block text-center whitespace-nowrap">
                  مشاهده نمونه کارها
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      {/* Scroll Indicator at the very bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-gray-400 text-sm">اسکرول کنید</span>
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center neon-glow">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-orange-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 