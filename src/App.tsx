import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll.jsx';
import './styles/globals.css';


function App() {
  return (
    <motion.div className="app">
      <SmoothScroll />
      <Navbar />
      <main>
        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <About />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Projects />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Skills />
        </motion.section>

        <motion.section
          className="section-shell"
          initial={{ opacity: 0.9, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
