import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ( ) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="navbar flex items-center flex-row-reverse gap-16 font-Mont pr-24 h-20 text-inherit font-medium sm:pr-5 sm:gap-3 sm:text-sm sticky top-0  z-30 bg-black">
      <motion.a
        onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact')}
        }
        whileHover={{ scale: 1.1 }}
        href="#contact"
      >
        Contact
      </motion.a>
      <motion.a
        onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills')}
        }
        whileHover={{ scale: 1.1 }}
        href="#skills"
      >
        Skills
      </motion.a>
      <motion.a
        onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience')}
        }
        whileHover={{ scale: 1.1 }}
        href="#experience"
      >
        Experience
      </motion.a>
      <motion.a
        onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects')}
        }
        whileHover={{ scale: 1.1 }}
        href="#projects"
      >
        Projects
      </motion.a>
    </div>
  );
};

export default Navbar;
