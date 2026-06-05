import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CinematicCanvas, { canvasState } from './components/CinematicCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

// ─── Lenis instance lives outside React so it never gets duplicated ───────────
let lenisInstance = null;

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const scrollTriggersRef = useRef([]);

  // ── Custom cursor ────────────────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const el = e.target;
      setCursorHovered(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        !!el.closest('a') ||
        !!el.closest('button')
      );
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  // ── Lenis smooth scroll (created once when portal loads) ────────────────────
  useEffect(() => {
    if (!loaded) return;

    lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    // Feed Lenis into ScrollTrigger via its own RAF (avoids duplicate GSAP tickers)
    function onLenisTick(time) {
      lenisInstance.raf(time * 1000);
    }
    gsap.ticker.add(onLenisTick);
    gsap.ticker.lagSmoothing(0);
    lenisInstance.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(onLenisTick);
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, [loaded]);

  // ── GSAP ScrollTrigger canvas choreography ──────────────────────────────────
  useEffect(() => {
    if (!loaded) return;

    // Kill any leftover triggers from a previous mount
    scrollTriggersRef.current.forEach(st => st.kill());
    scrollTriggersRef.current = [];

    // Wait one rAF so the DOM is fully painted & measured
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#app-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,   // higher = smoother / less twitchy
          onToggle: () => ScrollTrigger.refresh(),
        },
      });

      // Capture the ScrollTrigger so we can kill it on cleanup
      scrollTriggersRef.current.push(tl.scrollTrigger);

      // We have 6 scroll transitions in the page:
      // Hero -> About -> Skills -> Projects -> Experience -> Certs -> Contact
      
      // Sequence A (74 frames, index 0 to 73)
      // Sequence B (69 frames, index 0 to 68)

      // 1. Hero → About
      tl.to(canvasState, { frameA: 24, blend: 0, duration: 1, ease: 'none' });

      // 2. About → Skills
      tl.to(canvasState, { frameA: 48, blend: 0, duration: 1, ease: 'none' });

      // 3. Skills → Projects
      tl.to(canvasState, { frameA: 73, blend: 0, duration: 1, ease: 'none' });

      // 4. Projects → Experience (Blend from End of Seq A to Start of Seq B)
      // Crossfade to Sequence B while moving B forward slightly
      tl.to(canvasState, { blend: 1, frameB: 22, duration: 1, ease: 'none' });

      // 5. Experience → Certifications
      tl.to(canvasState, { frameB: 45, blend: 1, duration: 1, ease: 'none' });

      // 6. Certifications → Contact
      tl.to(canvasState, { frameB: 68, blend: 1, duration: 1, ease: 'none' });
    });

    return () => {
      cancelAnimationFrame(rafId);
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [loaded]);

  return (
    <>
      {/* Canvas is ALWAYS rendered — never unmounts, never fades */}
      <CinematicCanvas />

      <AnimatePresence mode="wait">
        {!loaded ? (
          <Preloader key="loader" onComplete={() => setLoaded(true)} />
        ) : (
          /* Only the TEXT/UI content fades in — canvas is untouched */
          <motion.div
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            id="app-container"
            className="relative w-full text-slate-100 font-sans"
          >
            {/* Cinematic scanlines overlay */}
            <div className="cinematic-noise" />

            {/* Custom cursor (desktop only) */}
            <motion.div
              className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none"
              style={{ zIndex: 99999 }}
              animate={{
                x: mousePos.x - 10,
                y: mousePos.y - 10,
                scale: cursorHovered ? 1.8 : 1,
                backgroundColor: cursorHovered
                  ? 'rgba(212, 175, 55, 0.2)'
                  : 'rgba(212, 175, 55, 0.05)',
                border: cursorHovered
                  ? '1px solid rgba(212, 175, 55, 0.8)'
                  : '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: cursorHovered
                  ? '0 0 18px rgba(212, 175, 55, 0.4)'
                  : '0 0 10px rgba(212, 175, 55, 0.1)',
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 400, mass: 0.1 }}
            />

            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Awards />
            <Experience />
            <Certifications />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
