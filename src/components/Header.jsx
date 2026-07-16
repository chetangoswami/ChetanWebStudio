'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <header>
      <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#333] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex justify-between items-center">
          
          <motion.div 
            animate="visible" variants={fadeUpVariant}
            className="text-lg md:text-xl font-bold tracking-tight font-heading text-[#f5f5f5]"
          >
            <Link href="/" aria-label="Chetan Web Studio Home">Chetan Web Studio</Link>
          </motion.div>
          
          <motion.div 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="flex items-center gap-6 md:gap-8 text-sm font-medium text-[#f5f5f5]"
          >
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link href="/work" className="hover:text-[#888] transition-colors duration-300">Work</Link>
            </motion.span>
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link href="/studio" className="hover:text-[#888] transition-colors duration-300">Studio</Link>
            </motion.span>
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:block">
              <Link href="/contact" className="hover:text-[#888] transition-colors duration-300">Contact</Link>
            </motion.span>
            
            <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="hidden md:inline-flex">
              <Link href="/contact" className="px-5 py-2.5 bg-[#f5f5f5] text-[#0a0a0a] font-bold border border-[#f5f5f5] hover:bg-transparent hover:text-[#f5f5f5] transition-colors duration-300 rounded-none">
                Start a Project
              </Link>
            </motion.span>


            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#333] bg-transparent transition-all duration-300 rounded-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
              <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out h-[1.5px] w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
            </button>
          </motion.div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#333] flex flex-col"
          >
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link href="/work" className="block p-6 border-b border-[#333] text-base font-medium hover:text-[#f5f5f5] text-[#a0a0a0] transition-colors uppercase tracking-widest font-mono">Work</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link href="/studio" className="block p-6 border-b border-[#333] text-base font-medium hover:text-[#f5f5f5] text-[#a0a0a0] transition-colors uppercase tracking-widest font-mono">Studio</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Link href="/contact" className="block p-6 border-b border-[#333] text-base font-medium hover:text-[#f5f5f5] text-[#a0a0a0] transition-colors uppercase tracking-widest font-mono">Contact</Link>
            </motion.div>
            <div className="p-6">
              <Link href="/contact" className="block text-center px-4 py-3 bg-[#f5f5f5] text-[#0a0a0a] rounded-none text-sm font-bold uppercase tracking-widest hover:bg-[#a0a0a0] hover:text-[#0a0a0a] transition-all duration-300">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
