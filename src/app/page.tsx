
'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingAnimation } from '@/components/loading-animation';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2500); // Increased duration for the new animation

    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="relative z-10">
          <Header />
          <main className="flex flex-col items-center justify-center">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
