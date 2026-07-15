import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-lg md:text-xl font-bold tracking-tight font-heading"
          >
            <Link to="/">Chetan Web Studio</Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="flex items-center gap-6 md:gap-8 text-sm font-medium text-text-main"
          >
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link to="/work" className="hover:text-accent transition-colors duration-300">Work</Link>
            </motion.span>
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link to="/studio" className="hover:text-accent transition-colors duration-300">Studio</Link>
            </motion.span>
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
            </motion.span>
            
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:inline-flex">
              <Link to="/contact" className="px-5 py-2.5 bg-text-main text-primary rounded-full text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                Start a Project
              </Link>
            </motion.span>

            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center border border-border bg-glass rounded-full shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-accent hover:text-accent transition-all duration-500"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-border bg-glass rounded-full shadow-sm transition-all duration-300"
            >
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
            </button>
          </motion.div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-2xl border-b border-border flex flex-col shadow-2xl"
          >
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link to="/work" className="block p-6 border-b border-border/30 text-base font-medium hover:text-accent transition-colors">Work</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link to="/studio" className="block p-6 border-b border-border/30 text-base font-medium hover:text-accent transition-colors">Studio</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link to="/contact" className="block p-6 border-b border-border/30 text-base font-medium hover:text-accent transition-colors">Contact</Link>
            </motion.div>
            <div className="p-6">
              <Link to="/contact" className="block text-center px-4 py-3 bg-text-main text-primary rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Header;
