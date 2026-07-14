import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary relative overflow-hidden mt-auto pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Top Massive Typographic Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter font-heading uppercase leading-[0.85] mb-6">
              LET'S <br/>
              <span className="text-accent italic pr-4">BUILD</span><br/>
              THE FUTURE
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-text-main text-primary font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300 brutalist-shadow">
              Start a Project
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-text-muted uppercase tracking-widest text-xs mb-2">Company</h4>
                <Link to="/" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">Home</Link>
                <Link to="/about" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">About</Link>
                <Link to="/contact" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">Contact</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-text-muted uppercase tracking-widest text-xs mb-2">Resources</h4>
                <Link to="/help" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">Help / FAQ</Link>
                <Link to="/legal-privacy" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">Privacy Policy</Link>
                <Link to="/terms-of-service" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">Terms of Service</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-text-muted uppercase tracking-widest text-xs mb-2">Social</h4>
                <a href="https://linkedin.com/in/ichetangoswami" target="_blank" rel="noopener noreferrer" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">LinkedIn</a>
                <a href="https://github.com/chetangoswami" target="_blank" rel="noopener noreferrer" className="font-bold uppercase tracking-wide text-sm md:text-base hover:text-accent hover:translate-x-2 transition-all duration-300">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-3xl md:text-4xl font-black tracking-tighter font-heading uppercase opacity-30 pointer-events-none">
            CHETAN WEB STUDIO<span className="text-accent">.</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
             <p className="text-text-muted font-bold tracking-widest uppercase text-xs">
              &copy; {new Date().getFullYear()} Chetan Web Studio.
            </p>
            <p className="text-text-muted font-bold tracking-widest uppercase text-[10px]">
              Crafted in Tactile Brutalism.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
