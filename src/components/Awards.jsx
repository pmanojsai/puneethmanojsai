import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Zap } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      title: "Smart India Hackathon",
      subtitle: "National Finalist",
      year: "2024",
      desc: "Selected as a national-level finalist for building an AI-powered legal aid platform solving citizen access to justice across India.",
      icon: <Trophy className="text-[var(--color-gold)]" size={22} />,
      accent: "border-[var(--color-gold)]/30 shadow-[0_0_25px_rgba(212,175,55,0.08)]",
      tag: "NATIONAL"
    },
    {
      title: "IEEE YESIST12 Hackathon",
      subtitle: "Regional Winner",
      year: "2023",
      desc: "Engineered a real-time blockchain-based supply chain solution, securing the regional top position among 200+ competing teams.",
      icon: <Medal className="text-[var(--color-bronze)]" size={22} />,
      accent: "border-[var(--color-bronze)]/30 shadow-[0_0_25px_rgba(205,127,50,0.08)]",
      tag: "REGIONAL"
    },
    {
      title: "Open Source Contribution Award",
      subtitle: "GitHub Community Recognition",
      year: "2023",
      desc: "Recognized for consistent high-impact contributions to open source MERN stack libraries and developer tooling repositories.",
      icon: <Star className="text-[var(--color-gold)]" size={22} />,
      accent: "border-[var(--color-gold)]/30 shadow-[0_0_25px_rgba(212,175,55,0.08)]",
      tag: "COMMUNITY"
    },
    {
      title: "Patent Filed — AI/Blockchain Fusion",
      subtitle: "Intellectual Property",
      year: "2024",
      desc: "Filed an official patent for a novel AI-integrated decentralized auditing architecture combining neural inference with immutable smart contract logs.",
      icon: <Zap className="text-[var(--color-bronze)]" size={22} />,
      accent: "border-[var(--color-bronze)]/30 shadow-[0_0_25px_rgba(205,127,50,0.08)]",
      tag: "PATENT"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="awards"
      className="relative w-full flex flex-col justify-center px-6 sm:px-16 lg:px-32 pt-0 pb-24 select-none overflow-hidden"
    >
      {/* Very subtle right-side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-obsidian)]/10 to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      {/* Ambient glow flare */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-l from-[var(--color-gold)]/6 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-3xl w-full ml-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-right"
        >
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">
            Vol. IV.V // Accolades
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-3 drop-shadow-md">
            Honours & Awards
          </h2>
          <p className="text-[var(--color-parchment)]/70 text-sm font-cinematic tracking-widest uppercase mt-3 italic">
            Recognitions, Victories & Innovations
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`glassmorphism-light p-6 sm:p-7 rounded-sm border transition-all duration-700 relative group flex flex-col justify-between overflow-hidden ${award.accent} hover:bg-[var(--color-gold)]/5`}
            >
              {/* Corner accent lines */}
              <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-[var(--color-gold)]/50 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-[var(--color-gold)]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-12 h-[1px] bg-gradient-to-r from-[var(--color-gold)]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-gradient-to-t from-[var(--color-gold)]/50 to-transparent" />

              <div>
                {/* Tag badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-[var(--color-obsidian)]/40 border border-[var(--color-gold)]/20 rounded-sm group-hover:border-[var(--color-gold)]/60 transition-all duration-500">
                    {award.icon}
                  </div>
                  <span className="text-[9px] font-sans tracking-[0.3em] text-[var(--color-gold)]/70 uppercase border border-[var(--color-gold)]/20 px-2.5 py-1 rounded-sm bg-[var(--color-gold)]/5">
                    {award.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-display font-medium text-[var(--color-parchment)] tracking-wide leading-tight group-hover:text-[var(--color-gold)] transition-colors duration-500 mb-1">
                  {award.title}
                </h3>
                <p className="text-[10px] font-sans tracking-[0.2em] text-[var(--color-bronze)] uppercase mb-4">
                  {award.subtitle}
                </p>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[var(--color-parchment)]/70 font-sans font-light leading-relaxed italic">
                  {award.desc}
                </p>
              </div>

              {/* Footer year */}
              <div className="mt-6 pt-4 border-t border-[var(--color-gold)]/10 flex justify-between items-center text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)]/50 group-hover:text-[var(--color-gold)]/80 transition-all duration-500">
                <span className="italic">Year of Record</span>
                <span className="uppercase font-medium">{award.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
