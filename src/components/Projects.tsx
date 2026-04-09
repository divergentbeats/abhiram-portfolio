import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'ICA Operations Platform',
    category: 'EdTech',
    description: 'Enterprise-grade operations management system for chess academies. Unified, role-based solution for student management and coaching operations.',
    tech: ['React', 'Firebase', 'TypeScript'],
    link: 'https://github.com/divergentbeats/ICA-Operations-Platform',
  },
  {
    id: 2,
    title: 'ChillSpace',
    category: 'Social Platform',
    description: 'Community-driven platform for connection and relaxation. Features real-time messaging, user profiles, and interactive social features.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://chillsspace.netlify.app/',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Design',
    description: 'Modern, responsive portfolio showcasing projects and skills. Built with focus on performance and elegant design.',
    tech: ['React', 'Vite', 'Framer Motion'],
    link: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>

              <div className="project-visual">
                <div className="visual-placeholder"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
