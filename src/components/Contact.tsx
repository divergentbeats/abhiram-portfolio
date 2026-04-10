import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
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
    <section className="contact section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="contact-left" variants={itemVariants}>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and interesting challenges.
            </p>
          </motion.div>

          <motion.div className="contact-right" variants={itemVariants}>
            <div className="contact-info">
              <div className="info-group">
                <h3 className="info-label">Email</h3>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhirambhat2210@gmail.com" target="_blank" rel="noreferrer" className="info-value">
                  abhirambhat2210@gmail.com
                </a>
              </div>

              <div className="info-group">
                <h3 className="info-label">Location</h3>
                <p className="info-value">Mysuru, Karnataka • India</p>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/abhiram-bhat-b037b8330/" target="_blank" rel="noreferrer" className="social-link">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/divergentbeats" target="_blank" rel="noreferrer" className="social-link">
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
