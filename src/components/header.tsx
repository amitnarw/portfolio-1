'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export function Header() {
  const activeSection = useActiveSection(['about', 'projects', 'skills', 'contact']);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.0, ease: 'easeOut' }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="group" data-cursor-hover>
          <div className="text-2xl font-bold tracking-wider text-foreground">
            A<span className="text-primary transition-colors group-hover:text-accent">.</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-border/50 bg-background/50 p-1 backdrop-blur-sm md:flex">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className={cn(
                'rounded-full',
                activeSection === item.href.substring(1) && 'bg-secondary text-secondary-foreground'
              )}
            >
              <Link href={item.href} data-cursor-hover>
                {item.name}
              </Link>
            </Button>
          ))}
          <Button
            asChild
            variant="ghost"
            className={cn(
              'rounded-full',
              activeSection === 'contact' && 'bg-primary text-primary-foreground hover:bg-primary/90'
            )}
          >
            <Link href="#contact" data-cursor-hover>
              Contact
            </Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
