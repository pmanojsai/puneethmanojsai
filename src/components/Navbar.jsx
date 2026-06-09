import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[40] w-[90%] max-w-6xl transition-all duration-500 rounded-full px-6 py-3 sm:py-4 flex justify-between items-center ${
          scrolled 
            ? 'glassmorphism shadow-glow-gold border-white/5' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center bg-[var(--color-gold)]/5 group-hover:border-[var(--color-gold)] group-hover:shadow-glow-gold transition-all duration-500">
            <Compass size={14} className="text-[var(--color-gold)] text-glow-gold" />
          </div>
          <span className="font-display text-sm sm:text-base tracking-widest text-[var(--color-parchment)] group-hover:text-[var(--color-gold)] transition-all duration-500 italic">
            Puneeth <span className="text-[var(--color-gold)] text-glow-gold not-italic font-cinematic text-xs">// Archives</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-sans tracking-[0.12em] text-[var(--color-parchment)]/70 hover:text-[var(--color-gold)] hover:text-glow-gold transition-all duration-500 uppercase relative py-1"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Puneeth_Manoj_Sai_Resume.pdf"
            className="px-4 py-1.5 rounded-sm border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/5 text-[10px] font-sans tracking-[0.12em] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.05)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full border border-white/10 hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-gold)]/10 text-[var(--color-parchment)] hover:text-[var(--color-gold)] transition-all duration-500"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[39] w-[90%] glassmorphism border border-[var(--color-gold)]/20 rounded-xl p-6 flex flex-col space-y-4 md:hidden shadow-[0_10px_30px_rgba(15,10,6,0.8)]"
          >
            {navItems.map((item, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-sm font-cinematic tracking-widest text-[var(--color-parchment)]/80 hover:text-[var(--color-gold)] py-3 border-b border-[var(--color-gold)]/10 uppercase"
              >
                <span>{item.name}</span>
                <ChevronRight size={14} className="text-[var(--color-gold)] opacity-60" />
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              download="Puneeth_Manoj_Sai_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 mt-2 rounded-sm border border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-center text-sm font-sans tracking-[0.2em] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] transition-all duration-500"
            >
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
