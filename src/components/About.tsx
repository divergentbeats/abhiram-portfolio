import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="about section section-alt" id="about">
      <div className="container">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about-content" variants={itemVariants}>
            <h2>About Me</h2>
            <p>
              I'm a full-stack developer and systems architect passionate about building scalable, 
              efficient systems that solve real-world problems. With expertise in modern web technologies 
              and cloud infrastructure, I create seamless digital experiences.
            </p>
            <p>
              My approach combines technical excellence with thoughtful design. Every project I work on 
              prioritizes clean code, performance optimization, and user-centric solutions.
            </p>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            <div className="glass feature-card">
              <h3>Full-Stack Development</h3>
              <p>React, Node.js, TypeScript, and modern web frameworks for building high-performance applications.</p>
            </div>
            <div className="glass feature-card">
              <h3>Systems Architecture</h3>
              <p>Designing scalable, maintainable systems with focus on reliability and performance.</p>
            </div>
            <div className="glass feature-card">
              <h3>Cloud Infrastructure</h3>
              <p>Google Cloud, Docker, and deployment optimization for production-grade applications.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
