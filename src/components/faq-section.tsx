
'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your typical development process?',
    answer:
      "My process is collaborative and iterative. I start with a deep dive into your goals, followed by wireframing and design. Once we have a solid plan, I move to development, providing regular updates. I believe in transparent communication to ensure the final product exceeds your expectations.",
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'The timeline varies depending on the project\'s complexity. A simple landing page might take 1-2 weeks, while a full-featured web application could take several months. After our initial consultation, I can provide a more accurate time estimate tailored to your project.',
  },
  {
    question: 'Can you work with my existing team?',
    answer:
      'Absolutely. I am experienced in collaborating with other developers, designers, and project managers. I am proficient with tools like Git, Jira, and Slack, and can seamlessly integrate into your existing workflow.',
  },
  {
    question: "What are your rates?",
    answer:
      "My rates are project-based to provide the best value. I offer a detailed proposal after understanding your specific needs. Let's connect for a free consultation to discuss your project and I can provide a tailored quote.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


export function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text"
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem value={`item-${index}`} className='border rounded-lg px-6 bg-card/50 transition-colors hover:bg-card/75'>
                <AccordionTrigger className='text-left font-semibold text-lg hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-base text-foreground/70'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
