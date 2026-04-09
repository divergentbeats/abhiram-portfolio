import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Firebase', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git/GitHub', 'Docker', 'Google Cloud', 'Vite', 'VS Code'],
  },
];

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section className="skills section section-alt" id="skills">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <h2>Skills & Expertise</h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category glass"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-tag"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
