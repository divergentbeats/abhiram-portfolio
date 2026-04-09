import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <h2>Get In Touch</h2>
            <p className="contact-description">
              Have a project in mind or want to collaborate? I'm always open to new opportunities and interesting challenges.
            </p>
          </motion.div>

          <motion.div className="contact-row" variants={itemVariants}>
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="info-item">
                <span className="label">Email</span>
                <a href="mailto:abhirambhat2210@gmail.com" className="link-glow">
                  abhirambhat2210@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span className="label">Location</span>
                <span>Mysuru, Karnataka • India</span>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                  GitHub
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
