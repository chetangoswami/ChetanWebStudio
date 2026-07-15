import React from 'react';
import { motion } from 'framer-motion';

const viewportOpts = { once: true, margin: '-80px' };

const About = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 lg:px-12 min-h-screen relative overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-xl mx-auto w-full relative z-10">
        
        {/* Header — animates on mount */}
        <div className="mb-24 border-b-2 border-border pb-12">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 font-heading leading-[0.85] break-words"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            THE PURSUIT OF <br className="hidden md:block" />
            <span className="text-accent">DIGITAL EXCELLENCE.</span>
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Founder Card */}
            <motion.div
              className="border border-border p-8 md:p-12 bg-primary brutalist-shadow transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOpts}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-heading mb-6">The Founder</h2>
              <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed">
                Founded by lead engineer Chetan Goswami, Chetan Web Studio was born out of a singular obsession with pure code and digital architecture. With over 3 years of dedicated full-stack engineering experience, Chetan established the studio to strip away the bloat of traditional templates and build bespoke systems that drive immense ROI for high-end brands.
              </p>
            </motion.div>

            {/* Global Reach */}
            <motion.div
              className="border-l-4 border-accent pl-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOpts}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-heading mb-4">Global Reach</h3>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                Based in New Delhi, India. Engineering elite digital experiences for a global clientele.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Boutique Approach */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOpts}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight font-heading mb-4 border-b border-border pb-4">The Boutique Approach</h3>
              <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed mt-6">
                We operate as a highly specialized, elite boutique. When you partner with Chetan Web Studio, you work directly with the founder. No account managers, no miscommunication. Just uncompromising quality and direct access to the architect building your digital presence.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOpts}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight font-heading mb-4 border-b border-border pb-4">The Philosophy</h3>
              <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed mt-6">
                We reject rigid platforms like WordPress and Shopify. True digital luxury requires absolute control. That is why we exclusively engineer custom React and Next.js applications, delivering pixel-perfect, scalable architectures tailored exactly to your brand's unique specifications.
              </p>
            </motion.div>

            {/* Stat Boxes */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="border border-border p-6 flex flex-col justify-center items-center bg-primary"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOpts}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              >
                <span className="text-3xl md:text-4xl font-black text-text-main font-heading mb-2">3+</span>
                <span className="font-bold uppercase tracking-widest text-xs text-text-muted text-center">Years Eng.</span>
              </motion.div>
              <motion.div
                className="border border-border p-6 flex flex-col justify-center items-center bg-primary"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOpts}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              >
                <span className="text-3xl md:text-4xl font-black text-text-main font-heading mb-2">100%</span>
                <span className="font-bold uppercase tracking-widest text-xs text-text-muted text-center">Custom</span>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
