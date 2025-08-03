
'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingAnimation } from '@/components/loading-animation';
import { AchievementsSection } from '@/components/achievements-section';
import { CertificationsSection } from '@/components/certifications-section';
import { FaqSection } from '@/components/faq-section';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingAnimation />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Header />
          <main className="flex flex-col items-center justify-center">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <AchievementsSection />
            <CertificationsSection />
            <EducationSection />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
