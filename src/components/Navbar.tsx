import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">ABHIRAM BHAT</a>
        </motion.div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};
