import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logs, setLogs] = useState([]);
  const [bootStep, setBootStep] = useState(0);

  const bootLogs = [
    "DUSTING OFF ARCHIVES...",
    "CURATING VINTAGE RECORDS...",
    "UNLOCKING HISTORICAL JOURNALS...",
    "CACHING ARCHITECTURAL BLUEPRINTS...",
    "PREPARING LUXURY EXHIBITS...",
    "RESTORING CINEMATIC ARTIFACTS...",
    "POLISHING BRASS HIGHLIGHTS...",
    "ARCHIVE READY. ENTER THE LIBRARY."
  ];

  // Simulated archive logs printing
  useEffect(() => {
    if (bootStep < bootLogs.length) {
      const delay = bootStep === 0 ? 300 : Math.random() * 800 + 400;
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, bootLogs[bootStep]]);
        setBootStep(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  // High-performance image preloader
  useEffect(() => {
    const totalA = 74;
    const totalB = 69;
    const totalImages = totalA + totalB;
    let loadedCount = 0;

    const imageUrls = [];

    // Sequence A URLs
    for (let i = 1; i <= totalA; i++) {
      const frameNum = String(i).padStart(3, '0');
      imageUrls.push(`/pic/ezgif-1c8e53b2e1acb458-jpg/ezgif-frame-${frameNum}.jpg`);
    }

    // Sequence B URLs
    for (let i = 1; i <= totalB; i++) {
      const frameNum = String(i).padStart(3, '0');
      imageUrls.push(`/pic/ezgif-1186f1d6b5d633e8-jpg/ezgif-frame-${frameNum}.jpg`);
    }

    // Preload function
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        // Calculate raw progress
        const computedProgress = Math.floor((loadedCount / totalImages) * 100);
        setProgress(prev => Math.max(prev, computedProgress));

        if (loadedCount === totalImages) {
          setTimeout(() => {
            setIsLoaded(true);
          }, 600);
        }
      };
      img.onerror = () => {
        // Fallback for missing frames
        loadedCount++;
        const computedProgress = Math.floor((loadedCount / totalImages) * 100);
        setProgress(prev => Math.max(prev, computedProgress));
        if (loadedCount === totalImages) {
          setTimeout(() => {
            setIsLoaded(true);
          }, 600);
        }
      };
      img.src = url;
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-[var(--color-obsidian)] z-[9999] flex flex-col justify-between p-6 sm:p-12 font-cinematic overflow-hidden select-none">
      <div className="cinematic-noise" />
      {/* Top Vintage HUD */}
      <div className="flex justify-between items-center text-sm opacity-60 text-[var(--color-gold)] font-display italic">
        <div>Vol. I // The Archives</div>
        <div>Curated by P.M.S.</div>
      </div>

      {/* Main Archive Console */}
      <div className="max-w-3xl w-full mx-auto my-auto flex flex-col justify-center relative z-10">
        {/* Elegant Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-parchment)] to-[var(--color-gold)] select-none drop-shadow-lg">
            Puneeth Manoj Sai
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-gold)] font-cinematic italic tracking-widest mt-4 opacity-80">
            Software Engineer • AI Systems • Full Stack Developer
          </p>
        </motion.div>

        {/* Live log feeds */}
        <div className="h-44 sm:h-56 glassmorphism-light p-6 rounded-sm overflow-hidden text-sm text-[var(--color-parchment)]/70 space-y-3 relative shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-obsidian)]/80 pointer-events-none" />
          {logs.map((log, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-start ${index === logs.length - 1 ? 'text-[var(--color-gold)] font-medium text-glow-gold' : ''}`}
            >
              <span className="text-[var(--color-bronze)] mr-3 opacity-60">✧</span>
              <span>{log}</span>
            </motion.div>
          ))}
          {bootStep < bootLogs.length && (
            <span className="inline-block w-1.5 h-4 bg-[var(--color-gold)] animate-pulse ml-2 align-middle opacity-60" />
          )}
        </div>

        {/* Loading Progress Bar */}
        <div className="mt-10 relative">
          <div className="flex justify-between text-xs sm:text-sm text-[var(--color-parchment)]/50 mb-3 font-sans tracking-widest uppercase">
            <span>Restoring Exhibition</span>
            <span className="text-[var(--color-gold)]">{progress}%</span>
          </div>
          <div className="h-[2px] bg-[var(--color-gold)]/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[var(--color-bronze)] to-[var(--color-gold)] shadow-glow-gold"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            />
          </div>
        </div>

        {/* Entry Controller Trigger */}
        <div className="h-24 flex justify-center items-center mt-12">
          <AnimatePresence>
            {isLoaded && bootStep >= bootLogs.length && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onComplete}
                className="px-10 py-4 border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/5 text-[var(--color-gold)] font-display text-lg hover:bg-[var(--color-gold)] hover:text-[var(--color-obsidian)] transition-all duration-500 cursor-pointer rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                OPEN ARCHIVES
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center text-xs opacity-40 text-[var(--color-parchment)] font-sans tracking-widest">
        <div>EST. 2026</div>
        <div>I</div>
      </div>
    </div>
  );
}
