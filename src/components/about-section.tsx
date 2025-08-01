
'use client';
import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lineReveal = {
    hidden: { y: '100%' },
    visible: (i: number) => ({
        y: '0%',
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    }),
};

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
            
            paragraphs.forEach((p, index) => {
                const lines = p.innerText.split('\n').map(line => `<div class="overflow-hidden"><div class="line">${line.trim()}</div></div>`).join('');
                p.innerHTML = lines;
                gsap.from(p.querySelectorAll('.line'), {
                    yPercent: 100,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
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
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-24">
            <div className="relative h-60 sm:h-[400px] w-full justify-self-center md:w-full">
                <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
                    alt="A portrait of Amit"
                    width={800}
                    height={1200}
                    data-ai-hint="man portrait"
                    className="h-full w-full rounded-lg object-cover object-center"
                />
            </div>
            <div className='flex items-center justify-center h-full'>
                <div className="space-y-6 text-lg text-foreground/80" ref={textContentRef}>
                  <p>
                    I'm a passionate and self-taught developer with a love for creating beautiful, intuitive, and high-performance web applications. My journey into code started with a simple curiosity and has grown into a full-fledged obsession with building things for the web.
                  </p>
                  <p>
                    With a strong foundation in React, Next.js, and modern JavaScript, I enjoy tackling complex problems and turning them into elegant solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or brewing the perfect cup of coffee.
                  </p>
                </div>
            </div>
        </div>
    </motion.section>
  );
}
