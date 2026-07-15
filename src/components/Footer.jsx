import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border mt-auto pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">Chetan Web Studio</h3>
            <p className="text-sm text-text-muted font-medium">Engineering Digital Excellence.</p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Sitemap</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-accent transition-colors">Work</Link></li>
              <li><Link to="/studio" className="hover:text-accent transition-colors">Studio</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Socials</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="https://www.linkedin.com/in/ichetangoswami" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/chetangoswami" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted gap-4">
          <p>© 2026 Chetan Web Studio. All rights reserved.</p>
          <p>Udyam Reg: UDYAM-DL-11-0165691</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
