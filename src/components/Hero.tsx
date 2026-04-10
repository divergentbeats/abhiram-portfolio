import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile-photo.jpg';

export default function Hero() {
  const handleInternalNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const lenis = (window as Window & {
      __lenis?: { scrollTo: (target: string, options?: { offset?: number }) => void };
    }).__lenis;

    if (lenis) {
      lenis.scrollTo(href, { offset: -88 });
    } else {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-shell">
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={textVariants} custom={0}>
            Mysuru, Karnataka
          </motion.p>

          <motion.h1 className="hero-title" variants={textVariants} custom={1}>
            <span className="hero-title-line">Abhiram</span>
            <span className="hero-title-line">Bhat</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={textVariants} custom={2}>
            Crafting fast, reliable digital systems.
          </motion.p>

          <motion.p className="hero-description" variants={textVariants} custom={3}>
            Full-Stack Developer and Systems Architect focused on high-performance products, scalable architectures, and clean delivery.
          </motion.p>

          <motion.div className="hero-cta" variants={textVariants} custom={4}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhirambhat2210@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">Email Me</a>
            <a href="/resume.pdf" download="Abhiram-Bhat-Resume.pdf" className="btn btn-secondary">Download Resume</a>
            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(event) => handleInternalNavClick(event, '#projects')}
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-media-wrap">
            <img className="hero-media" src={profilePhoto} alt="Abhiram Bhat portrait" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
