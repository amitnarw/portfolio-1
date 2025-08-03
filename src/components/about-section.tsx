
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
  const imageRef = useRef<HTMLDivElement>(null);
  const sideTextRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
                toggleActions: 'play none none reverse',
            }
        });

        if (textContentRef.current) {
            tl.from(textContentRef.current.querySelector('h2'), {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
            }, 0);
        }

        if(imageRef.current) {
            tl.from(imageRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            }, 0.2);
        }

        if(sideTextRef.current) {
            tl.from(sideTextRef.current.querySelectorAll('p'), {
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            }, 0.5);
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
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]" ref={imageRef}>
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
            alt="A portrait of Amit"
            width={800}
            height={1200}
            data-ai-hint="man portrait"
            className="h-full w-full rounded-lg object-cover object-top shadow-lg"
          />
        </div>
        <div className="space-y-6 text-lg text-foreground/80" ref={sideTextRef}>
          <p>
            I'm a passionate and self-taught developer with a love for creating beautiful, intuitive, and high-performance web applications.
          </p>
          <p>
            My journey into code started with a simple curiosity and has grown into a full-fledged obsession with building things for the web. I thrive on challenges and am constantly learning to stay at the forefront of technology.
          </p>
          <p>
            When I'm not coding, you can find me exploring new coffee shops, hiking in the mountains, or capturing moments with my camera.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
