'use client';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code, Database, Globe, PencilRuler } from 'lucide-react';

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "Firebase", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "Webpack", "Vite", "Figma", "Jira"],
  design: ["UI/UX Principles", "Responsive Design", "Wireframing", "Prototyping"],
};

const skillCategories = [
    { name: "Frontend", icon: <Globe className="h-6 w-6 text-accent" />, skills: skills.frontend },
    { name: "Backend", icon: <Database className="h-6 w-6 text-accent" />, skills: skills.backend },
    { name: "Tools & DevOps", icon: <Code className="h-6 w-6 text-accent" />, skills: skills.tools },
    { name: "Design", icon: <PencilRuler className="h-6 w-6 text-accent" />, skills: skills.design },
]

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight text-primary md:text-5xl text-glow">My Skills</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
            <motion.div key={category.name} className="rounded-lg border bg-card p-6 glass-card neon-glow" variants={itemVariants}>
                <div className="mb-4 flex items-center gap-4">
                    {category.icon}
                    <h3 className="text-2xl font-bold font-headline text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm" data-cursor-hover>
                        {skill}
                        </Badge>
                    ))}
                </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
