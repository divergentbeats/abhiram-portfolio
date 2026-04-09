import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
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
      <div className="container">
        <motion.div
          className="hero-content"
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
            Full-Stack Developer and Systems Architect building robust products with clarity and speed.
          </motion.p>

          <motion.div className="hero-cta" variants={textVariants} custom={4}>
            <a href="mailto:abhirambhat2210@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
