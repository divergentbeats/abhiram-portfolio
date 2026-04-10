import { motion } from 'framer-motion';
import './Projects.css';
import icaImage from '../assets/projects/ica-platform.png';
import chillspaceImage from '../assets/projects/chillspace.png';
import groundwaterImage from '../assets/projects/groundwater-dashboard.png';
import portfolioImage from '../assets/projects/portfolio-hero.png';

const projects = [
  {
    id: 1,
    title: 'ICA Operations Platform',
    category: 'EdTech',
    description: 'Enterprise-grade operations management system for chess academies. Unified, role-based solution for student management and coaching operations.',
    tech: ['React', 'Firebase', 'TypeScript'],
    link: 'https://github.com/divergentbeats/ICA-Operations-Platform',
    image: icaImage,
    imageAlt: 'ICA Operations Platform screenshot',
  },
  {
    id: 2,
    title: 'ChillSpace',
    category: 'Social Platform',
    description: 'Community-driven platform for connection and relaxation. Features real-time messaging, user profiles, and interactive social features.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/divergentbeats/Chillspace',
    image: chillspaceImage,
    imageAlt: 'ChillSpace website screenshot',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Design',
    description: 'Modern, responsive portfolio showcasing projects and skills. Built with focus on performance and elegant design.',
    tech: ['React', 'Vite', 'Framer Motion'],
    link: 'https://github.com/divergentbeats/abhiram-portfolio',
    image: portfolioImage,
    imageAlt: 'Portfolio website screenshot',
  },
  {
    id: 4,
    title: 'Groundwater Dashboard',
    category: 'Data Science & Analytics',
    description: 'Predictive analytics dashboard for groundwater management, integrating Prophet time-series forecasting with interactive data visualization.',
    tech: ['Python', 'Flask', 'Prophet', 'Charts'],
    link: 'https://github.com/divergentbeats/Groundwaterdashboard',
    image: groundwaterImage,
    imageAlt: 'Groundwater Dashboard project screenshot',
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

              <a
                className="project-visual project-media-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} project`}
              >
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
