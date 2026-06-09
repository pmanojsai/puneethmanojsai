import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Feather, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      id: "AWS-CCP",
      glow: "border-[var(--color-gold)]/30 shadow-glow-gold",
      desc: "Cloud deployment, VPC architectures, EC2 infrastructure scaling, IAM security roles."
    },
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB Inc.",
      id: "MDB-DEV",
      glow: "border-[var(--color-bronze)]/30 shadow-[0_0_15px_rgba(205,127,50,0.1)]",
      desc: "NoSQL schema indexing, aggregation pipelines, transaction security, atlas scaling."
    },
    {
      title: "Agentforce Specialist",
      issuer: "Salesforce",
      id: "SF-AGF",
      glow: "border-[var(--color-gold)]/30 shadow-glow-gold",
      desc: "Autonomous conversational AI agents, action orchestrators, custom API integrations."
    },
    {
      title: "Node.js Certification",
      issuer: "Verified Credential",
      id: "NODE-JS",
      glow: "border-[var(--color-bronze)]/30 shadow-[0_0_15px_rgba(205,127,50,0.1)]",
      desc: "Event-driven architecture, REST APIs, asynchronous programming, backend deployment."
    },
    {
      title: "Spring MVC & JSP",
      issuer: "Verified Credential",
      id: "JAVA-SPRING",
      glow: "border-[var(--color-gold)]/30 shadow-glow-gold",
      desc: "Enterprise Java web applications, model-view-controller architectures, secure routing."
    },
    {
      title: "IndustriAI Hackathon",
      issuer: "Hackathon",
      id: "IND-AI",
      glow: "border-[var(--color-bronze)]/30 shadow-[0_0_15px_rgba(205,127,50,0.1)]",
      desc: "Built scalable AI/ML integrated systems under tight competition deadlines."
    },
    {
      title: "ChatGPT + Zapier",
      issuer: "Verified Credential",
      id: "AI-ZAP",
      glow: "border-[var(--color-gold)]/30 shadow-glow-gold",
      desc: "Advanced AI automation workflows and intelligent system triggers."
    }
  ];

  return (
    <section
      id="certifications"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Very subtle right-side gradient only */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      <div className="max-w-3xl w-full ml-auto">
        {/* Section Title */}
        <div className="mb-10 text-right">
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">Vol. VI // Accolades</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-2 drop-shadow-md">
            Endorsements
          </h2>
          <p className="text-[var(--color-parchment)]/70 text-sm font-cinematic tracking-widest uppercase mt-3 italic">
            Verified Architectural Certifications
          </p>
        </div>

        {/* Certification Cards */}
        <div className="flex flex-col space-y-6">
          {certs.map((cert, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: -6 }}
              key={idx}
              className={`glassmorphism-light p-5 sm:p-7 rounded-sm border transition-all duration-700 relative flex items-start gap-5 ${cert.glow} hover:bg-[var(--color-gold)]/5`}
            >
              {/* Shield Badge indicator */}
              <div className="p-3 rounded-sm bg-[var(--color-obsidian)]/30 border border-[var(--color-gold)]/20 text-[var(--color-gold)] flex-shrink-0 shadow-inner">
                <Award size={20} className="text-glow-gold" />
              </div>

              {/* Text Info */}
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <h3 className="text-base sm:text-lg font-display font-medium text-[var(--color-parchment)] leading-tight tracking-wide drop-shadow-sm">
                    {cert.title}
                  </h3>
                  <span className="text-[9px] font-sans tracking-widest text-[var(--color-parchment)]/50 uppercase italic">
                    ID: {cert.id}
                  </span>
                </div>
                <p className="text-[10px] font-sans tracking-[0.2em] text-[var(--color-gold)] uppercase">
                  {cert.issuer}
                </p>
                <p className="text-[11px] sm:text-xs text-[var(--color-parchment)]/70 font-sans font-light leading-relaxed pt-2 italic">
                  {cert.desc}
                </p>
              </div>

              {/* Status active verified check */}
              <div className="absolute top-5 right-5 text-[var(--color-gold)] opacity-30">
                <CheckCircle2 size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Validation Rate footer */}
        <div className="mt-8 pt-6 border-t border-[var(--color-gold)]/10 flex justify-between items-center">
          <span className="text-[9px] font-sans text-[var(--color-parchment)]/40 uppercase tracking-widest italic">Archival Integrity</span>
          <p className="text-[10px] text-[var(--color-gold)] flex items-center gap-1.5">
            <Feather size={12} className="animate-pulse" />
            <span>Validation Rate: 98.42%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
