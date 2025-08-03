
'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      }
      
      if (imageRef.current) {
        gsap.to(imageRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
      }

      const achievementItems = gsap.utils.toArray<HTMLElement>('.achievement-item');
      achievementItems.forEach((item) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
        
        gsap.from(item.querySelector('.description'), {
            opacity: 0.7,
            duration: 0.5,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: true,
            }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="achievements"
      ref={containerRef}
      className="relative container mx-auto max-w-7xl py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
          <div ref={imageRef} className="absolute inset-0 h-[120%] w-full">
            <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1374&auto=format&fit=crop"
                alt="Abstract background"
                width={1374}
                height={916}
                data-ai-hint="abstract background"
                className="h-full w-full object-cover"
            />
          </div>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10">
        <h2
          ref={headingRef}
          className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text"
        >
          Achievements & Awards
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-item">
                <div className="flex flex-col items-start gap-4 rounded-lg border border-transparent p-6 transition-all duration-300 hover:border-border/50 hover:bg-card/50 md:flex-row">
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
      </div>
    </motion.section>
  );
}
