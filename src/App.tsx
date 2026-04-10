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
    <div className="app">
      <SmoothScroll />
      <Navbar />
      <main>
        <section className="section-shell">
          <Hero />
        </section>

        <section className="section-shell">
          <About />
        </section>

        <section className="section-shell">
          <Projects />
        </section>

        <section className="section-shell">
          <Skills />
        </section>

        <section className="section-shell">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
