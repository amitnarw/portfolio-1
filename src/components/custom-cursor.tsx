
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  
  const cursorDotX = useSpring(0, springConfig);
  const cursorDotY = useSpring(0, springConfig);
  
  const cursorOutlineX = useSpring(0, { ...springConfig, stiffness: 200 });
  const cursorOutlineY = useSpring(0, { ...springConfig, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorDotX.set(e.clientX);
      cursorDotY.set(e.clientY);
      cursorOutlineX.set(e.clientX);
      cursorOutlineY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a, button, [data-cursor-hover]')) {
            setCursorType('hover');
        } else if (target.closest('input, textarea, [data-cursor-text]')) {
            setCursorType('text');
        } else {
            setCursorType('default');
        }
    };
    
    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorDotX, cursorDotY, cursorOutlineX, cursorOutlineY]);

  const dotSize = cursorType === 'hover' ? 0 : 8;
  const outlineSize = cursorType === 'hover' ? 40 : 32;
  const outlineScale = cursorType === 'hover' ? 1.2 : 1;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 rounded-full bg-primary md:block"
        style={{
          left: cursorDotX,
          top: cursorDotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ width: dotSize, height: dotSize }}
        transition={springConfig}
      />
      <motion.div
        className={cn(
            "pointer-events-none fixed z-[9999] hidden rounded-full border border-primary/50 md:block",
            "shadow-[0_0_200px_hsl(var(--primary)/0.9)]",
            cursorType === 'hover' && "bg-primary/20 shadow-[0_0_250px_hsl(var(--primary)/1)]"
        )}
        style={{
          left: cursorOutlineX,
          top: cursorOutlineY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ width: outlineSize, height: outlineSize, scale: outlineScale }}
        transition={springConfig}
      />
    </>
  );
};
