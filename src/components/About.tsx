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
    <section className="about section" id="about">
      <div className="about-container">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about-left" variants={itemVariants}>
            <h2 className="about-title">About</h2>
            <p>
              I'm a full-stack developer and systems architect passionate about building scalable, 
              efficient systems that solve real-world problems.
            </p>
            <p>
              With expertise in modern web technologies and cloud infrastructure, I create seamless 
              digital experiences that prioritize performance, reliability, and user-focused design.
            </p>
          </motion.div>

          <motion.div className="about-right" variants={itemVariants}>
            <h3 className="capabilities-title">Key Capabilities</h3>
            <ul className="capabilities-list">
              <li><strong>Full-Stack Development</strong><br />React, Node.js, TypeScript, modern web frameworks</li>
              <li><strong>Systems Architecture</strong><br />Scalable design, reliability, performance optimization</li>
              <li><strong>Cloud Infrastructure</strong><br />Google Cloud, Docker, deployment automation</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
