import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ExternalLink, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const trigger = triggerRef.current;

    if (!track || !trigger) return;

    // Calculate total scroll distance
    const getScrollAmount = () => {
      return -(track.scrollWidth - window.innerWidth);
    };

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Ojas Raksha",
      role: "Lead Architect",
      desc: "Patent-filed DPDP compliant blockchain healthcare platform featuring secure patient records, role-based access control, decentralized IPFS storage, and blockchain authentication.",
      tech: ["React.js", "Node.js", "Express.js", "Solidity", "IPFS", "MongoDB"],
      accent: "border-[var(--color-gold)] shadow-[0_0_30px_rgba(212,175,55,0.15)]",
      special: true,
      github: "https://github.com/pmanojsai",
      live: "https://ojasraksha.vercel.app"
    },
    {
      title: "Hexa AI",
      role: "Principal Engineer",
      desc: "Advanced AI assistant supporting automation, intelligent conversations, API integrations, and productivity workflows. Designed for complex decision automation.",
      tech: ["Python", "Flask", "OpenAI API", "NLP"],
      accent: "border-[var(--color-bronze)] shadow-[0_0_30px_rgba(205,127,50,0.1)]",
      special: false,
      github: "https://github.com/pmanojsai",
      live: "#"
    },
    {
      title: "KLEF IEEE Website",
      role: "Web Master",
      desc: "Official IEEE student branch website handling event registrations, announcements, and community engagement for students. Engineered with a custom event logbook.",
      tech: ["React.js", "Tailwind CSS", "Vercel", "GitHub Actions"],
      accent: "border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/60",
      special: false,
      github: "https://github.com/pmanojsai",
      live: "https://ieee-website-kohl.vercel.app"
    },
    {
      title: "AIQSec Conference",
      role: "Tech Lead",
      desc: "Official international conference ledger specialized in AI and Quantum Cryptographic Security. Designed to manage delegate registrations and research tracking.",
      tech: ["Vite", "Tailwind CSS", "Framer Motion", "GSAP ScrollTrigger"],
      accent: "border-[var(--color-bronze)]/20 hover:border-[var(--color-bronze)]/60",
      special: false,
      github: "https://github.com/pmanojsai",
      live: "#"
    },
    {
      title: "AI-CQCom Congress",
      role: "Architect",
      desc: "Premium registry and manuscript-submission hub designed for the AI & Cyber Quantum Communications Congress. Handled meticulous load orchestration for massive traffic.",
      tech: ["React.js", "Tailwind CSS", "GSAP Animations", "PostgreSQL"],
      accent: "border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/60",
      special: false,
      github: "https://github.com/pmanojsai",
      live: "#"
    }
  ];

  return (
    <div ref={triggerRef} className="relative min-h-[150vh] bg-[var(--color-obsidian)]">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-center select-none z-30">
        
        {/* Soft background dark light flare */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--color-gold)]/5 via-[var(--color-bronze)]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Floating Horizontal Header */}
        <div className="w-full px-12 sm:px-24 mb-8 flex justify-between items-end flex-shrink-0">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic">Vol. IV // The Collection</span>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-2 drop-shadow-md">
              Cinematic Works
            </h2>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-parchment)]/50 italic">
              SCROLL DOWN TO TRAVERSE &gt;&gt;
            </span>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div ref={trackRef} className="flex items-center space-x-8 px-12 sm:px-24 w-max">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className={`w-[320px] sm:w-[460px] h-[480px] sm:h-[520px] glassmorphism-light rounded-sm p-6 sm:p-10 flex flex-col justify-between border relative group ${project.accent} transition-all duration-700`}
            >
              {/* Special Spark Glow for Highlighted Project */}
              {project.special && (
                <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-[var(--color-gold)] text-[var(--color-obsidian)] text-[9px] font-sans font-bold tracking-widest rounded-sm flex items-center space-x-1 shadow-glow-gold">
                  <Crown size={12} />
                  <span>MASTERPIECE</span>
                </div>
              )}

              <div>
                {/* Micro tech indexes */}
                <div className="flex justify-between items-center text-[10px] font-sans text-[var(--color-parchment)]/50 tracking-widest mb-6 uppercase">
                  <span>Exhibit // 0{idx + 1}</span>
                  <span className="text-[var(--color-gold)] italic font-bold tracking-wider">{project.role}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-parchment)] tracking-wide leading-none group-hover:text-[var(--color-gold)] transition-colors duration-500 drop-shadow-sm">
                  {project.title}
                </h3>

                {/* Subtitle descriptions */}
                <p className="text-[var(--color-parchment)]/80 font-sans font-light text-xs sm:text-sm mt-5 leading-relaxed line-clamp-4 italic">
                  {project.desc}
                </p>

                {/* Code aesthetics block for Ojas Raksha */}
                {project.special && (
                  <div className="mt-5 p-4 rounded-sm bg-[var(--color-obsidian)]/30 border border-[var(--color-gold)]/20 font-sans text-[10px] text-[var(--color-gold)]/70 max-w-sm relative overflow-hidden shadow-inner">
                    <span className="absolute right-3 top-3 text-[8px] text-[var(--color-gold)]/40 font-bold uppercase tracking-widest">Architectural Blueprint</span>
                    <code>
                      contract OjasRaksha {"{"} <br />
                      &nbsp;&nbsp;mapping(address =&gt; Record) private records;<br />
                      &nbsp;&nbsp;function auditAccess(...) external; <br />
                      {"}"}
                    </code>
                  </div>
                )}
              </div>

              {/* Footer details: Tag list and links */}
              <div>
                {/* Tech tags list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-sm bg-[var(--color-obsidian)]/20 border border-[var(--color-gold)]/10 text-[9px] sm:text-[10px] font-sans text-[var(--color-parchment)]/70 group-hover:text-[var(--color-gold)] group-hover:border-[var(--color-gold)]/40 transition-all duration-500 uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link indicators */}
                <div className="flex space-x-5 border-t border-[var(--color-gold)]/20 pt-5">
                  <a 
                    href={project.github} 
                    className="flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-widest text-[var(--color-parchment)]/60 hover:text-[var(--color-gold)] transition-colors duration-500 uppercase"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>SOURCE</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-widest text-[var(--color-gold)] hover:text-[var(--color-gold)]/80 hover:shadow-glow-gold transition-all duration-500 uppercase"
                  >
                    <ExternalLink size={12} />
                    <span>LAUNCH</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Endless Journey slide */}
          <div className="w-[280px] sm:w-[360px] h-[480px] sm:h-[520px] rounded-sm p-6 sm:p-10 border border-dashed border-[var(--color-gold)]/20 flex flex-col justify-center items-center text-center opacity-60 hover:opacity-100 hover:border-[var(--color-gold)]/60 transition-all duration-700 glassmorphism-light">
            <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4 italic">THE ARCHIVE CONTINUES</span>
            <h3 className="text-2xl font-display font-medium text-[var(--color-parchment)] tracking-wider drop-shadow-md">AWAITING COMMISSION?</h3>
            <p className="text-xs text-[var(--color-parchment)]/70 mt-3 max-w-[200px] leading-relaxed italic font-sans font-light">Let us forge the next timeless digital masterpiece together.</p>
            <a 
              href="#contact" 
              className="mt-8 px-8 py-3 border border-[var(--color-gold)]/40 rounded-sm text-[10px] font-sans text-[var(--color-gold)] tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500 uppercase"
            >
              SEND MISSIVE
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
