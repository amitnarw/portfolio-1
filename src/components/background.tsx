'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';

export const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(background, {
        '--x': `${e.clientX}px`,
        '--y': `${e.clientY}px`,
        duration: 0.5,
        ease: 'sine.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className={cn(
        'fixed inset-0 z-0',
        '[--x:50%] [--y:50%]',
        'bg-background',
        'before:content-[""] before:fixed before:inset-0 before:z-[-1]',
        'before:bg-[radial-gradient(circle_at_var(--x)_var(--y),_hsl(var(--primary)/0.8)_0,_transparent_35vw)]',
        'dark:before:bg-[radial-gradient(circle_at_var(--x)_var(--y),_hsl(var(--primary)/0.6)_0,_transparent_30vw)]'
      )}
    />
  );
};
