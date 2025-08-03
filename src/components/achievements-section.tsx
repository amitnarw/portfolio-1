
'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: 'Awwwards Site of the Day',
    issuer: 'Awwwards',
    year: '2023',
    description: 'Awarded for exceptional design and development on the "QuantumLeap" project.',
  },
  {
    title: 'FWA of the Day',
    issuer: 'FWA',
    year: '2022',
    description: 'Recognized for innovation and creativity in the "Nova CRM" web application.',
  },
  {
    title: 'CSS Design Awards - Website of the Day',
    issuer: 'CSSDA',
    year: '2022',
    description: 'Honored for outstanding UI/UX design and implementation on "Aether CMS".',
  },
  {
    title: 'Top Voted on Product Hunt',
    issuer: 'Product Hunt',
    year: '2021',
    description: 'Ranked #1 product of the day for the launch of the "Zenith Wallet" application.',
  },
];

export function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="achievements"
      ref={containerRef}
      className="container mx-auto max-w-7xl py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <div className="md:col-span-1 relative mb-12 md:mb-0 text-center md:text-left">
            <div className="md:sticky md:top-1/2 md:-translate-y-1/2 md:pr-8">
                <h2 className="text-3xl font-bold font-headline tracking-tight md:text-4xl gradient-text">
                    Achievements
                </h2>
                <p className="mt-4 text-foreground/70">
                    A testament to my dedication to excellence and innovation in web development.
                </p>
            </div>
            <div 
              className="absolute right-0 top-0 hidden h-full w-px md:block"
              style={{
                backgroundImage: 'linear-gradient(to bottom, hsl(var(--foreground)/0.6) 40%, transparent 40%)',
                backgroundSize: '1px 10px',
                backgroundRepeat: 'repeat-y'
              }}
            />
        </div>
        <div className="md:col-span-2 space-y-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              ref={el => itemsRef.current[index] = el}
              className="achievement-item group relative"
            >
              <div 
                className="absolute bottom-0 left-0 h-px w-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)/0.6) 40%, transparent 40%)',
                  backgroundSize: '10px 1px',
                  backgroundRepeat: 'repeat-x'
                }}
              />
              <div className="flex flex-col items-start gap-4 p-6 transition-all duration-300 md:flex-row">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col items-start justify-between md:flex-row">
                    <h3 className="text-xl font-bold font-headline text-foreground">
                      {item.title}
                    </h3>
                    <p className="flex-shrink-0 text-sm font-medium text-foreground/60 md:mt-1">
                      {item.year}
                    </p>
                  </div>
                  <p className="mt-1 text-lg text-primary">{item.issuer}</p>
                  <p className="description mt-3 text-base text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
