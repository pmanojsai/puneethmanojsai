import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, Layers, Cloud, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Engineering",
      icon: <Code className="text-[var(--color-gold)]" size={18} />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "GSAP ScrollTrigger"],
      glowColor: "border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:border-[var(--color-gold)]/50"
    },
    {
      category: "Backend Architecture",
      icon: <Server className="text-[var(--color-bronze)]" size={18} />,
      skills: ["Node.js", "Express.js", "Python", "Java"],
      glowColor: "border-[var(--color-bronze)]/20 shadow-[0_0_20px_rgba(205,127,50,0.05)] hover:border-[var(--color-bronze)]/50"
    },
    {
      category: "Artificial Intelligence",
      icon: <Cpu className="text-[var(--color-gold)]" size={18} />,
      skills: ["Neural Systems", "LLM Integration", "Agent Architectures", "Python RAG"],
      glowColor: "border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:border-[var(--color-gold)]/50"
    },
    {
      category: "Blockchain Systems",
      icon: <Layers className="text-[var(--color-bronze)]" size={18} />,
      skills: ["Solidity", "IPFS Storage", "Smart Contracts", "Web3 Libraries"],
      glowColor: "border-[var(--color-bronze)]/20 shadow-[0_0_20px_rgba(205,127,50,0.05)] hover:border-[var(--color-bronze)]/50"
    },
    {
      category: "Cloud Infrastructure",
      icon: <Cloud className="text-[var(--color-gold)]" size={18} />,
      skills: ["AWS Cloud Practitioner", "Docker Containers", "Nginx", "CI/CD Actions"],
      glowColor: "border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:border-[var(--color-gold)]/50"
    },
    {
      category: "Database Engineering",
      icon: <Database className="text-[var(--color-bronze)]" size={18} />,
      skills: ["MongoDB", "PostgreSQL", "Relational Models", "Redis Caching"],
      glowColor: "border-[var(--color-bronze)]/20 shadow-[0_0_20px_rgba(205,127,50,0.05)] hover:border-[var(--color-bronze)]/50"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Soft overlay gradient - reduced */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-obsidian)]/10 to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Title Block */}
        <div className="mb-16 text-right max-w-3xl ml-auto">
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">Vol. III // Technical Schematic</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-3 drop-shadow-md">
            Engineering Blueprints
          </h2>
          <p className="text-[var(--color-parchment)]/70 text-sm font-cinematic tracking-widest uppercase mt-3 italic">
            Intelligent Systems & Full Stack Matrix
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-6 sm:space-y-8 max-w-3xl ml-auto"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glassmorphism-light p-6 sm:p-8 rounded-sm border transition-all duration-700 relative flex flex-col justify-between overflow-hidden group ${cat.glowColor}`}
            >
              {/* Corner blueprint lines */}
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[var(--color-gold)]/40 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-[var(--color-gold)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-[var(--color-gold)]/40 to-transparent" />

              <div>
                {/* Header Icon + Name */}
                <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-[var(--color-gold)]/10">
                  <div className="p-2 bg-[var(--color-obsidian)]/40 border border-[var(--color-gold)]/20 rounded-sm group-hover:border-[var(--color-gold)]/60 transition-all duration-500">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-sans tracking-[0.2em] text-[var(--color-parchment)] uppercase group-hover:text-[var(--color-gold)] transition-colors duration-500">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills tags list */}
                <ul className="space-y-3 font-sans text-xs text-[var(--color-parchment)]/70">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 bg-transparent border border-[var(--color-gold)]/50 group-hover:bg-[var(--color-gold)]/80 transition-all duration-500 rotate-45" />
                      <span className="group-hover:text-[var(--color-parchment)] transition-colors duration-500 tracking-wider">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical index badge in card footer */}
              <div className="mt-8 pt-4 border-t border-[var(--color-gold)]/10 flex justify-between items-center text-[10px] font-sans tracking-[0.3em] opacity-50 group-hover:opacity-80 transition-all duration-500 text-[var(--color-gold)]">
                <span className="italic">FIG. 0{idx + 1}</span>
                <span className="uppercase">VALIDATED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
