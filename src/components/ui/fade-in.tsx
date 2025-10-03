import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className 
}: FadeInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const directionOffset = {
    up: { y: 20, x: 0, scale: 1 },
    down: { y: -20, x: 0, scale: 1 },
    left: { y: 0, x: 20, scale: 1 },
    right: { y: 0, x: -20, scale: 1 },
    scale: { y: 0, x: 0, scale: 0 }
  };

  const { y, x, scale } = directionOffset[direction];
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y,
        x,
        scale
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};