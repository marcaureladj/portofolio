import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1B4D2E]/80 backdrop-blur-md shadow-lg' 
          : 'bg-[#1B4D2E]/60 backdrop-blur-sm'
      } py-4`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">MA.</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <NavLink href="#about">À propos</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#skills">Compétences</NavLink>
              <NavLink href="#experience">Expérience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <a 
              href="#contact" 
              className="px-4 py-2 text-white bg-[#00CC00] hover:bg-[#00FF00] rounded-full transition-colors duration-300"
            >
              Me Contacter →
            </a>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:text-[#00FF00] transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

export default Navbar;
