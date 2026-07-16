'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#333] mt-auto pt-16 pb-8 transition-colors duration-500 font-sans text-[#f5f5f5]">
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
            <p className="text-sm text-[#888] font-medium">Engineering Digital Excellence.</p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Sitemap</h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors">Studio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Socials</h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li><a href="https://www.linkedin.com/in/ichetangoswami" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/chetangoswami" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#666] gap-4">
          <p>© 2026 Chetan Web Studio. All rights reserved.</p>
          <p>Udyam Reg: UDYAM-DL-11-0165691</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
