'use client';
import Image from 'next/image';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  hint: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg p-8 glass-card">
      <div className="relative h-24 w-24 rounded-full overflow-hidden mb-6">
        <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={100}
            height={100}
            data-ai-hint={testimonial.hint}
            className="h-full w-full object-cover"
        />
      </div>
      <blockquote className="text-center text-xl italic text-foreground/80 md:text-2xl">
        “{testimonial.quote}”
      </blockquote>
      <div className="mt-8 text-center">
        <p className="font-bold text-lg text-primary">{testimonial.name}</p>
        <p className="text-sm text-foreground/60">{testimonial.title}</p>
      </div>
    </div>
  );
}
