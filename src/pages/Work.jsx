import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ikohoImg from '../assets/ikoho.png';
import yourIndiaHolidaysImg from '../assets/yourindiaholidays.png';

const Work = () => {
  useEffect(() => {
    document.title = 'Our Work | Chetan Web Studio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Browse the portfolio of Chetan Web Studio — ultra-premium React websites and digital storefronts engineered for elite brands worldwide.');
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full pb-24">
      {/* 2.1 Header */}
      <section className="pt-20 pb-16 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">Our Masterpieces.</h1>
          <p className="text-xl text-text-muted font-medium leading-relaxed">
            A curated selection of digital experiences engineered for growth, scale, and market dominance.
          </p>
        </motion.div>
      </section>

      {/* 2.2 Case Study 1 - Ikoho */}
      <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto border-t border-border/50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
          className="mb-16"
        >
          <img 
            src={ikohoImg} 
            alt="Ikoho Case Study" 
            className="rounded-2xl w-full aspect-[21/9] object-cover object-top hover:scale-[1.02] transition-transform duration-500 mb-12 shadow-2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 border-b border-border pb-2">The Tech Stack</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>Shopify (Customized Minimog Theme)</li>
                <li>Vanilla JavaScript (AJAX/Fetch API)</li>
                <li>Native Web Components</li>
                <li>CSS overrides</li>
                <li>Python (Custom Crawler)</li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">The Challenge</h3>
                <p className="text-text-muted leading-relaxed">
                  Ikoho's Shopify infrastructure was cracking under scaling traffic. They faced mobile cart abandonment due to broken variants, iOS/Firefox blocking their high-fashion videos, severe technical debt causing browser crashes, and massive SEO cannibalization.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">The Solution</h3>
                <p className="text-text-muted leading-relaxed">
                  We deployed a massive UX and backend stabilization. We engineered an AJAX Cart Variant Swapper, a Persistent Session Scarcity Engine to drive FOMO without erratic visual jumps, built defensive DOM guards against XSS and crashes, and wrote a custom Python deep-crawler to eliminate sitemap duplicates. We successfully migrated their Shiprocket API credentials with zero downtime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.3 Case Study 2 - Your India Holidays */}
      <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto border-t border-border/50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="mb-16"
        >
          <img 
            src={yourIndiaHolidaysImg} 
            alt="Your India Holidays Case Study" 
            className="rounded-2xl w-full aspect-[21/9] object-cover object-top hover:scale-[1.02] transition-transform duration-500 mb-12 shadow-2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 border-b border-border pb-2">The Tech Stack</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>React 19 & Tailwind CSS v4</li>
                <li>Vite</li>
                <li>Firebase (Firestore, Hosting)</li>
                <li>Cloudflare Workers</li>
                <li>Groq API (Llama-3.3-70b-versatile)</li>
                <li>Playwright & GitHub Actions</li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">The Challenge</h3>
                <p className="text-text-muted leading-relaxed">
                  Translating a raw Google AI Studio prototype into a production-ready enterprise app. The client needed to tame an AI Travel Planner to prevent "hallucinations," enforce high-security standards against bot traffic, and optimize a seamless admin backend.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">The Solution</h3>
                <p className="text-text-muted leading-relaxed">
                  We architected a blazing-fast React frontend and securely injected strict business persona rules to guarantee culturally relevant, hallucination-free AI responses. By migrating the AI engine to Cloudflare Workers and utilizing the Groq API (Llama 3.3 70b), we unlocked near-instantaneous edge latency. Automated E2E Playwright tests and Firebase App Check fortified the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Work;
