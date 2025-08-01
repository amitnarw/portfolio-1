'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard, type Testimonial } from './testimonial-card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    quote: "Working with Amit was an absolute pleasure. Their attention to detail and creative problem-solving skills are second to none. They delivered a product that exceeded all our expectations.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359112-58872a2a4DBc?q=80&w=200&auto=format&fit=crop",
    hint: "woman portrait"
  },
  {
    quote: "The final result was stunning. Amit has a unique ability to translate complex ideas into a beautiful, functional, and user-friendly design. We couldn't be happier with the outcome.",
    name: "John Smith",
    title: "Marketing Director, Solutions Co.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    hint: "man portrait"
  },
  {
    quote: "I was impressed by their professionalism and dedication. They were always available to answer questions and provide updates. I highly recommend their services to anyone looking for a top-tier developer.",
    name: "Samuel Green",
    title: "Founder, Tech startups",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop",
    hint: "man portrait"
  },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
  return (
    <motion.section
      id="testimonials"
      className="container mx-auto max-w-7xl py-20 md:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">What Clients Say</h2>
      
      <div className="relative h-[32rem] w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
            >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline" size="icon" onClick={handlePrev} data-cursor-hover>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext} data-cursor-hover>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

    </motion.section>
  );
}
