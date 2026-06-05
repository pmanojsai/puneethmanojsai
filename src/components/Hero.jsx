import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-end px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Soft overlay gradient - reduced */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-obsidian)]/10 to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      {/* Main Intro Overlay Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl flex flex-col items-end text-right justify-center mt-20"
      >
        {/* Cinematic micro badge */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center space-x-2 px-4 py-1.5 border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 text-[10px] font-sans tracking-[0.3em] uppercase text-[var(--color-gold)] mb-8"
        >
          <Sparkles size={12} className="opacity-80" />
          <span>Exhibition I // Active</span>
        </motion.div>

        {/* Big Premium Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-medium tracking-wide text-[var(--color-parchment)] select-none leading-tight mb-4 drop-shadow-2xl"
        >
          PUNEETH<br/>MANOJ SAI
        </motion.h1>

        {/* Spaced Subtitle / Role */}
        <motion.h2 
          variants={itemVariants}
          className="text-lg sm:text-2xl font-cinematic italic tracking-widest text-[var(--color-gold)] uppercase mb-8 opacity-90 drop-shadow-md"
        >
          Software Engineer • AI Systems<br className="hidden sm:block" /> • Full Stack Developer
        </motion.h2>

        {/* Tagline pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-end gap-3 font-sans text-xs sm:text-sm text-[var(--color-parchment)]/70 max-w-xl mb-10 uppercase tracking-[0.2em]"
        >
          <span>MERN</span>
          <span className="text-[var(--color-bronze)]">✧</span>
          <span>AI Architecture</span>
          <span className="text-[var(--color-bronze)]">✧</span>
          <span>Web3</span>
          <span className="text-[var(--color-bronze)]">✧</span>
          <span>Cloud Systems</span>
        </motion.div>

        {/* Short intro bio */}
        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base text-[var(--color-parchment)]/80 max-w-xl font-sans font-light leading-relaxed tracking-wide mb-12 italic"
        >
          Crafting intelligent algorithms, cinematic digital experiences, and masterful full-stack architectures built for legacy.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-end items-end sm:items-center"
        >
          <a
            href="#projects"
            className="px-10 py-3.5 border border-[var(--color-parchment)]/30 bg-[var(--color-obsidian)]/50 backdrop-blur-sm text-[var(--color-parchment)] text-xs font-sans tracking-[0.2em] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all duration-500 uppercase cursor-pointer"
          >
            View Case Studies
          </a>
          <a
            href="#about"
            className="px-10 py-3.5 border border-[var(--color-gold)] bg-[var(--color-gold)]/10 backdrop-blur-sm text-[var(--color-gold)] text-xs font-sans tracking-[0.2em] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500 uppercase cursor-pointer"
          >
            Explore The Archive
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce pointer-events-none">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-parchment)] mb-2 italic">Begin Journey</span>
        <ChevronDown size={14} className="text-[var(--color-gold)]" />
      </div>
    </section>
  );
}
