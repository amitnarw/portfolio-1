
'use client';
import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animate text word by word
        if (textContentRef.current) {
            const heading = textContentRef.current.querySelector('h2');
            const paragraphs = textContentRef.current.querySelectorAll('p');
            
            if (heading) {
                 tl.from(heading.querySelectorAll('span'), {
                    y: 50,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: 'power4.out',
                });
            }
            
            paragraphs.forEach(p => {
                const words = p.innerText.split(' ').map(word => `<span>${word}</span>`).join(' ');
                p.innerHTML = words;
                tl.from(p.querySelectorAll('span'), {
                    y: 30,
                    opacity: 0,
                    stagger: 0.02,
                    duration: 0.5,
                    ease: 'power3.out',
                }, "-=0.6");
            });
        }

        // Parallax for image
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Simple split for initial render
  const headingWords = "About Me".split(' ').map(word => `<span class="inline-block">${word}</span>`).join('&nbsp;');

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="container mx-auto max-w-7xl py-20 md:py-32 overflow-hidden"
    >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            <div className="md:col-span-2" ref={textContentRef}>
                <h2 className="mb-8 text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text" dangerouslySetInnerHTML={{ __html: headingWords }} />
                <div className="space-y-4 text-lg text-foreground/80">
                  <p>
                  I'm a passionate and self-taught developer with a love for creating beautiful, intuitive, and high-performance web applications. My journey into code started with a simple curiosity and has grown into a full-fledged obsession with building things for the web.
                  </p>
                  <p>
                  With a strong foundation in React, Next.js, and modern JavaScript, I enjoy tackling complex problems and turning them into elegant solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or brewing the perfect cup of coffee.
                  </p>
                </div>
            </div>
            <div className="relative h-64 w-64 justify-self-center md:h-96 md:w-96">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
                <div ref={imageRef} className="h-full w-full">
                  <Image
                      src="https://images.unsplash.com/photo-1603415526960-f7e0328f35a4?q=80&w=400&auto=format&fit=crop"
                      alt="A portrait of Amit"
                      width={400}
                      height={400}
                      data-ai-hint="man portrait"
                      className="relative rounded-full border-4 border-primary object-cover h-full w-full"
                  />
                </div>
            </div>
        </div>
    </motion.section>
  );
}
