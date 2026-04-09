import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const footerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        variants={footerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="footer-main" variants={itemVariants}>
          <h3 className="footer-heading">Abhiram Bhat</h3>
          <p className="footer-tagline">Building fast, reliable digital systems</p>
        </motion.div>

        <motion.div className="footer-links" variants={itemVariants}>
          <div className="link-column">
            <h4>Navigation</h4>
            <a href="#about" onClick={(event) => handleInternalNavClick(event, '#about')}>About</a>
            <a href="#projects" onClick={(event) => handleInternalNavClick(event, '#projects')}>Projects</a>
            <a href="#skills" onClick={(event) => handleInternalNavClick(event, '#skills')}>Skills</a>
            <a href="#contact" onClick={(event) => handleInternalNavClick(event, '#contact')}>Contact</a>
          </div>

          <div className="link-column">
            <h4>Connect</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:abhirambhat2210@gmail.com">Email</a>
          </div>
        </motion.div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {currentYear} Abhiram Bhat. All rights reserved.</p>
          <p className="divider">•</p>
          <p>Designed & Built with React & Framer Motion</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
