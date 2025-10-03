import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface BlurInProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const BlurIn = ({ children, as = 'h2', className }: BlurInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const MotionComponent = motion[as] as any;
  
  return (
    <MotionComponent
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};