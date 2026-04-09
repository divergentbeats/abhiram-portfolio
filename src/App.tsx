import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div className="app">
      <Navbar />
      <main>
        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Hero />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <About />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Projects />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Skills />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
