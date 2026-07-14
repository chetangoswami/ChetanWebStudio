import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Help from './pages/Help';
import About from './pages/About';
import LegalPrivacy from './pages/LegalPrivacy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null; // Defensive DOM guard

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary text-text-main font-sans selection:bg-accent selection:text-white transition-colors duration-500 overflow-x-hidden">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-primary/70 backdrop-blur-xl border-b border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-2xl font-black tracking-tighter font-heading uppercase"
          >
            <Link to="/">Chetan<span className="text-accent">.</span>Studio</Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="flex items-center gap-6 md:gap-8 text-sm font-bold text-text-main uppercase tracking-widest"
          >
            <a href="/#work" className="hover:text-accent transition-colors duration-300 hidden md:block">Work</a>
            <Link to="/contact" className="hover:text-accent transition-colors duration-300 hidden md:block">Contact</Link>
            
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center border border-border bg-glass rounded-full shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] hover:bg-glass-hover active:translate-y-[1px] active:shadow-[2px_2px_0px_var(--color-border)] transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-border bg-glass shadow-[3px_3px_0px_var(--color-border)]"
            >
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`}></span>
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-text-main block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`}></span>
            </button>
          </motion.div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-border flex flex-col shadow-lg"
          >
            <a href="/#work" onClick={() => setIsMenuOpen(false)} className="p-6 border-b border-border/50 text-xl font-bold uppercase tracking-widest hover:text-accent transition-colors">Work</a>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="p-6 text-xl font-bold uppercase tracking-widest hover:text-accent transition-colors">Contact</Link>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-privacy" element={<LegalPrivacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
