import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Tech Lead",
      organization: "Algorand Club",
      period: "Mar 2025 - Present",
      desc: "Leading blockchain initiatives, mentoring members, conducting technical workshops, and guiding real-world decentralized application development.",
      location: "KL University",
      glow: "shadow-[0_0_20px_rgba(212,175,55,0.1)] border-[var(--color-gold)]/20"
    },
    {
      role: "Web Master & Graphic Designer",
      organization: "IEEE Student Branch",
      period: "Dec 2024 - Present",
      desc: "Developing official event websites, managing digital platforms, improving UI/UX, and maintaining IEEE branding for various international conferences.",
      location: "KL University",
      glow: "shadow-[0_0_20px_rgba(205,127,50,0.1)] border-[var(--color-bronze)]/20"
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Very subtle right-side gradient only */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />
      {/* Dynamic Background Flare - lighter */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[200px] bg-gradient-to-l from-[var(--color-bronze)]/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-3xl w-full ml-auto">
        
        {/* Section Title */}
        <div className="mb-20 text-right">
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">Vol. V // Leadership Logs</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-3 drop-shadow-md">
            Chronology Records
          </h2>
          <p className="text-[var(--color-parchment)]/70 text-sm font-cinematic tracking-widest uppercase mt-3 italic">
            Experience, Community & Mentoring Journals
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-r border-[var(--color-gold)]/20 pr-6 sm:pr-10 space-y-12">
          
          {/* Glowing Tracker Overlay */}
          <div className="absolute top-0 right-0 translate-x-[1.5px] w-[2px] h-full bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-bronze)] to-transparent rounded-full opacity-60" />

          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={idx}
              className="relative group"
            >
              {/* Pulsing Timeline Node - on the right */}
              <div className="absolute -right-[31px] sm:-right-[47px] top-1.5 w-4 h-4 rounded-full border border-[var(--color-gold)] bg-[var(--color-obsidian)] flex items-center justify-center shadow-glow-gold group-hover:scale-110 transition-transform duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
              </div>

              {/* Glassmorphic timeline card */}
              <div className={`glassmorphism-light p-6 sm:p-8 rounded-sm border ${exp.glow} relative hover:border-[var(--color-gold)]/40 transition-all duration-700`}>
                
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
                  <div>
                    <span className="text-[10px] font-sans tracking-widest text-[var(--color-gold)]/80 flex items-center gap-2 uppercase">
                      <Briefcase size={12} />
                      <span>{exp.organization}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-2 group-hover:text-[var(--color-gold)] transition-colors duration-500">
                      {exp.role}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[var(--color-obsidian)]/30 border border-[var(--color-gold)]/10 text-[10px] font-sans text-[var(--color-parchment)]/70 tracking-widest w-max sm:self-start shadow-inner">
                    <Calendar size={12} className="text-[var(--color-gold)]/70" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Body details */}
                <p className="text-[var(--color-parchment)]/80 font-sans font-light text-sm leading-relaxed mb-6 italic">
                  {exp.desc}
                </p>

                {/* Footer details: location node */}
                <div className="flex items-center space-x-2 text-[10px] font-sans tracking-widest text-[var(--color-parchment)]/50 uppercase">
                  <MapPin size={12} className="text-[var(--color-bronze)]" />
                  <span>{exp.location}</span>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
