import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ikohoCaseStudy } from '../data/ikoho';
import { yourindiaholidaysCaseStudy } from '../data/yourindiaholidays';

const CaseStudy = () => {
  const { slug } = useParams();
  
  let data = null;
  if (slug === 'ikoho') {
    data = ikohoCaseStudy;
  } else if (slug === 'yourindiaholidays') {
    data = yourindiaholidaysCaseStudy;
  }

  useEffect(() => {
    if (data) {
      document.title = `${data.client} Case Study | Chetan Web Studio`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Explore the ${data.client} case study by Chetan Web Studio — a deep dive into the challenge, solution, and measurable impact of ultra-premium web engineering.`);
      }
    } else {
      document.title = 'Case Study Not Found | Chetan Web Studio';
    }
  }, [data]);

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">Case Study Not Found</h1>
        <Link to="/" className="text-accent hover:underline">Return Home</Link>
      </div>
    );
  }

  const customEase = [0.22, 1, 0.36, 1];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <div className="bg-primary text-text-main font-sans min-h-screen selection:bg-text-main selection:text-primary pt-16 pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-20">
          <Link to="/" className="group inline-flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-text-main transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Work
          </Link>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-text-main">
            {data.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm md:text-base border-y-4 border-border py-8">
            <div className="flex flex-col gap-1">
              <span className="text-text-muted font-bold uppercase tracking-widest text-xs">Client</span>
              <span className="font-black uppercase">{data.client}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-text-muted font-bold uppercase tracking-widest text-xs">Platform</span>
              <span className="font-black uppercase">{data.platform}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-text-muted font-bold uppercase tracking-widest text-xs">Timeline</span>
              <span className="font-black uppercase">{data.timeline}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-text-muted font-bold uppercase tracking-widest text-xs">Role</span>
              <span className="font-black uppercase">{data.role}</span>
            </div>
          </div>
          
          {data.liveUrl && (
            <div className="mt-12">
              <a 
                href={data.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-4 bg-text-main text-primary px-8 py-5 md:px-12 md:py-6 text-xl md:text-3xl font-black uppercase tracking-widest border-4 border-border shadow-[8px_8px_0px_var(--color-border)] hover:shadow-[12px_12px_0px_var(--color-border)] hover:-translate-y-1 active:translate-y-1 active:shadow-[4px_4px_0px_var(--color-border)] transition-all duration-300"
              >
                <span>View Live Site</span>
                <span className="text-3xl md:text-4xl">↗</span>
              </a>
            </div>
          )}
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 1, ease: customEase }} 
          className="mb-32 relative group"
        >
          {/* Massive Background Text - Darkened as per feedback */}
          <div className="title-bg absolute -top-16 left-0 text-[12rem] md:text-[18rem] font-black uppercase pointer-events-none select-none z-[-1] tracking-tighter leading-none">
            {data.client}
          </div>
          
          <div className="absolute inset-0 bg-text-main translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out"></div>
          <div className="relative border-4 border-border overflow-hidden bg-secondary">
            <img src={data.heroImage} alt={`${data.client} Hero`} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105" />
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b-4 border-border pb-4 inline-block">The Challenge</h2>
            <p className="text-xl md:text-2xl leading-snug font-medium text-text-muted">{data.challenge}</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b-4 border-border pb-4 inline-block">The Solution</h2>
            <p className="text-xl md:text-2xl leading-snug font-medium text-text-muted">{data.solution}</p>
          </div>
        </div>

        {/* Execution Phases */}
        <div className="mb-32">
          <h2 
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center md:text-left"
          >
            Execution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.phases && data.phases.map((phase, index) => (
              <div 
                key={index} 
                className="group relative bg-primary border-4 border-border p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 ease-out shadow-[8px_8px_0px_var(--color-border)] hover:shadow-[16px_16px_0px_var(--color-border)]"
              >
                <div className="text-8xl font-black text-border opacity-20 absolute top-4 right-4 z-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:text-text-main">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6 mt-12 bg-text-main text-primary inline-block px-3 py-1">
                    {phase.title}
                  </h3>
                  <ul className="space-y-4">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="leading-snug text-lg font-medium text-text-main flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-text-main shrink-0 mt-2 rounded-none" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div 
          className="bg-text-main text-primary border-4 border-border p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute -right-20 -bottom-20 text-[20rem] font-black text-primary opacity-10 pointer-events-none leading-none select-none">
            R
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">The Impact</h2>
            <ul className="space-y-8">
              {data.results && data.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-6 text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  <span className="opacity-50 shrink-0 mt-1">→</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
