import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 — Page Not Found | Chetan Web Studio";
  }, []);

  const customEase = [0.22, 1, 0.36, 1];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      className="min-h-[80vh] flex flex-col justify-center items-center px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          variants={itemVariant}
          className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none font-heading tracking-tighter text-text-main drop-shadow-[8px_8px_0px_var(--color-accent)] md:drop-shadow-[16px_16px_0px_var(--color-accent)] selection:bg-transparent"
        >
          404
        </motion.h1>
        
        <motion.div variants={itemVariant} className="mt-8 mb-12">
          <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight mb-4">
            Looks like you're lost.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-text-muted max-w-2xl mx-auto">
            The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-3 bg-text-main text-primary px-8 py-5 text-xl font-bold uppercase tracking-widest border-2 border-text-main shadow-[6px_6px_0px_var(--color-accent)] hover:shadow-[8px_8px_0px_var(--color-accent)] hover:-translate-y-1 active:translate-y-1 active:shadow-[2px_2px_0px_var(--color-accent)] transition-all duration-300"
          >
            <span>Return Home</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFound;
