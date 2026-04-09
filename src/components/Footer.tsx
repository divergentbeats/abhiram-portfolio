import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
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
