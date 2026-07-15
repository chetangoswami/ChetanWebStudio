import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Studio = () => {
  useEffect(() => {
    document.title = 'The Studio | Chetan Web Studio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Inside Chetan Web Studio — our process, philosophy, and engineering approach to building ultra-premium digital experiences for elite brands.');
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const steps = [
    {
      step: "01",
      title: "Discovery & Architecture",
      desc: "Deep-dive into business goals and target audience behavior."
    },
    {
      step: "02",
      title: "UI/UX Prototyping",
      desc: "High-fidelity visual mockups establishing the creative direction."
    },
    {
      step: "03",
      title: "Frontend Engineering",
      desc: "Translating design into pixel-perfect, scalable React code."
    },
    {
      step: "04",
      title: "Quality Assurance & Launch",
      desc: "Rigorous performance, accessibility, and cross-browser testing."
    }
  ];

  return (
    <div className="w-full">
      {/* 3.1 Hero */}
      <section className="pt-24 pb-16 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">Engineering Meets Aesthetics.</h1>
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl mx-auto">
            We are a collective of designers, engineers, and strategists obsessed with the bleeding edge of web technology.
          </p>
        </motion.div>
      </section>

      {/* 3.2 Our Philosophy */}
      <section className="py-24 px-4 md:px-6 bg-text-main text-primary">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              "We believe that the web is a canvas for elite business. We do not build templates. We architect bespoke digital systems designed to dominate markets."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 3.3 The Process */}
      <section className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading">The Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              className="relative p-8 border border-border rounded-2xl bg-glass hover:bg-glass-hover transition-colors duration-500 hover:border-text-main"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl font-black font-heading text-border mb-6 group-hover:text-text-muted transition-colors duration-300">
                {item.step}
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Studio;
