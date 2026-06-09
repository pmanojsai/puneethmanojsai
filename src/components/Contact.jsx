import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Feather, Heart } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: "POSTAL",
      icon: <Mail size={14} />,
      url: "mailto:2320090028@klh.edu.in",
      glow: "hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-glow-gold"
    },
    {
      name: "LINKEDIN",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://linkedin.com/in/p-puneeth-manoj-sai-978758289",
      glow: "hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)] shadow-[0_0_15px_rgba(205,127,50,0.05)] hover:shadow-[0_0_20px_rgba(205,127,50,0.4)]"
    },
    {
      name: "GITHUB",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      url: "https://github.com/pmanojsai",
      glow: "hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-glow-gold"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Very subtle right-side gradient only */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      {/* Top spacer */}
      <div />

      {/* Main Credits & Contacts Panel */}
      <div className="max-w-2xl w-full ml-auto text-right flex flex-col items-end justify-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">Vol. VII // Correspondence</span>
          
          <h2 className="text-5xl sm:text-7xl font-display font-medium text-[var(--color-parchment)] tracking-wide leading-none drop-shadow-md">
            The Invitation
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-parchment)]/80 max-w-lg mx-auto font-sans font-light leading-relaxed italic">
            Building the future through timeless craftsmanship and modern architecture. Send a missive or acquire the complete dossier.
          </p>

          {/* Glowing Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-end items-end sm:items-center py-5">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-sm border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 flex items-center justify-center gap-3 font-sans text-[10px] sm:text-xs text-[var(--color-parchment)]/70 tracking-widest transition-all duration-500 cursor-pointer ${item.glow} uppercase`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Premium Resume Download Call-to-action */}
          <div className="pt-5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              download="Puneeth_Manoj_Sai_Resume.pdf"
              className="inline-flex items-center gap-3 px-10 py-4 border border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-sans tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 uppercase cursor-pointer rounded-sm"
            >
              <Feather size={14} />
              <span>Download Dossier</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Outro / Ending Movie Credits */}
      <div className="w-full max-w-3xl ml-auto border-t border-[var(--color-gold)]/10 pt-12 text-right select-none">
        
        {/* Cinematic Spaced Credits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-sans text-[9px] sm:text-[10px] text-[var(--color-parchment)]/60 tracking-[0.2em] uppercase mb-16 italic">
          <div>
            <span className="text-[var(--color-gold)]/60 block mb-1 font-semibold not-italic">AUTHORED BY</span>
            <span>PUNEETH M. SAI</span>
          </div>
          <div>
            <span className="text-[var(--color-gold)]/60 block mb-1 font-semibold not-italic">ARCHIVAL ENGINE</span>
            <span>ANTIGRAVITY SYSTEMS</span>
          </div>
          <div>
            <span className="text-[var(--color-gold)]/60 block mb-1 font-semibold not-italic">MATERIALS</span>
            <span>REACT + TAILWIND V4</span>
          </div>
          <div>
            <span className="text-[var(--color-gold)]/60 block mb-1 font-semibold not-italic">CHOREOGRAPHY</span>
            <span>GSAP + SCROLLTRIGGER</span>
          </div>
        </div>

        {/* Closing Title "THE JOURNEY CONTINUES..." */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 2 }}
          className="py-6 flex flex-col items-center justify-center space-y-5"
        >
          <h3 className="font-display text-lg sm:text-xl font-medium tracking-[0.3em] text-[var(--color-gold)] uppercase select-none drop-shadow-md italic">
            The Legacy Continues...
          </h3>
          <div className="flex items-center gap-2 text-[9px] font-sans text-[var(--color-parchment)]/50 tracking-widest uppercase">
            <span>Vol 3.5.2</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">CRAFTED WITH <Heart size={10} className="text-[var(--color-bronze)] fill-[var(--color-bronze)]" /> FOR ETERNITY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
