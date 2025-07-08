'use client';

import { ReactNode } from 'react';

interface FallbackMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FallbackMotion({ children, className = '', delay = 0 }: FallbackMotionProps) {
  const style = {
    animationDelay: `${delay}s`,
  };

  return (
    <div 
      className={`animate-fade-in-up ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

// Motion variants for when framer-motion is available
export const motionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5 },
}; 