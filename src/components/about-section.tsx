
'use client';
import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        if (textContentRef.current) {
            const heading = textContentRef.current.querySelector('h2');
            const paragraphs = textContentRef.current.querySelectorAll('p');
            
            if (heading) {
                gsap.from(heading, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    }
                });
            }
            
            paragraphs.forEach((p) => {
                gsap.from(p, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: p,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="container mx-auto max-w-7xl py-20 md:py-32 overflow-hidden"
    >
        <div className="mb-16 text-center" ref={textContentRef}>
            <h2 className="text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">
                About Me
            </h2>
        </div>
        <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-4xl sm:h-[500px] md:h-[600px]">
                <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
                    alt="A portrait of Amit"
                    width={800}
                    height={1200}
                    data-ai-hint="man portrait"
                    className="h-full w-full rounded-lg object-cover object-center"
                />
            </div>
            <div className='absolute -bottom-16 md:-right-16 md:bottom-auto w-full md:w-1/2 p-8'>
                <div className="space-y-6 rounded-lg bg-card/80 p-6 text-xl text-foreground/90 backdrop-blur-md" ref={textContentRef}>
                  <p>
                    I'm a passionate and self-taught developer with a love for creating beautiful, intuitive, and high-performance web applications.
                  </p>
                  <p>
                    My journey into code started with a simple curiosity and has grown into a full-fledged obsession with building things for the web.
                  </p>
                </div>
            </div>
        </div>
    </motion.section>
  );
}
