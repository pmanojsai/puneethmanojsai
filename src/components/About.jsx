import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Bookmark } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Award className="text-[var(--color-gold)]" size={20} />,
      title: "Patent Filed",
      desc: "Innovative AI/Blockchain integration system."
    },
    {
      icon: <Users className="text-[var(--color-bronze)]" size={20} />,
      title: "800+ Users Served",
      desc: "Deploying active live web systems to production."
    },
    {
      icon: <Bookmark className="text-[var(--color-gold)]" size={20} />,
      title: "Full-Stack Production",
      desc: "High-load MERN applications."
    },
    {
      icon: <Shield className="text-[var(--color-bronze)]" size={20} />,
      title: "AWS Certified",
      desc: "Certified Cloud Practitioner engineering."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex items-center justify-end px-6 sm:px-16 lg:px-32 py-24 select-none overflow-hidden"
    >
      {/* Very subtle right-side gradient only */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-obsidian)]/60 pointer-events-none -z-10" />

      <div className="max-w-2xl w-full">
        
        {/* Right Side: Vintage historical record card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glassmorphism-light p-8 sm:p-12 rounded-md border border-[var(--color-gold)]/30 shadow-[0_20px_50px_rgba(15,10,6,0.5)] relative"
        >
          {/* Elegant side ribbon */}
          <div className="absolute top-1/2 -left-[1px] -translate-y-1/2 w-[3px] h-32 bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent rounded-full opacity-80" />
          
          <span className="text-[10px] font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase italic opacity-80">Vol. II // The Architect</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-[var(--color-parchment)] tracking-wide mt-3 mb-6 drop-shadow-md">
            Who is Puneeth?
          </h2>

          <p className="text-[var(--color-parchment)]/80 leading-relaxed font-sans font-light text-sm sm:text-base mb-8">
            I am a 3rd-year CSIT scholar focused on engineering robust AI architectures, full-stack systems, secure blockchain applications, and immersive digital experiences. I weave classical software craftsmanship with timeless visual elegance to forge enduring technological legacies.
          </p>

          {/* Archive Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                key={idx}
                className="flex space-x-3 p-5 bg-[var(--color-obsidian)]/30 border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/5 border-glow-hover transition-all duration-500 rounded-sm shadow-inner"
              >
                <div className="mt-1 flex-shrink-0 opacity-90">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-sans tracking-widest text-[var(--color-parchment)] uppercase">{item.title}</h4>
                  <p className="text-[11px] text-[var(--color-parchment)]/60 font-sans font-light mt-1.5 leading-normal italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
