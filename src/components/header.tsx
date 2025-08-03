
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "skills",
    "achievements",
    "certifications",
    "education",
    "testimonials",
    "faq",
    "contact",
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="group" data-cursor-hover>
          <div className="text-2xl font-bold tracking-wider text-foreground">
            A
            <span className="text-primary transition-colors group-hover:text-accent">
              .
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-background/50 p-1 backdrop-blur-sm lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full",
                activeSection === item.href.substring(1) &&
                  "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Link href={item.href} data-cursor-hover>
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="lg:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-card/95 backdrop-blur-sm mx-4 rounded-lg border p-4 shadow-lg"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg",
                  activeSection === item.href.substring(1)
                    ? "text-primary font-semibold"
                    : "text-foreground/80",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
