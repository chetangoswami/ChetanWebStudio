import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const projects = [
    {
      title: 'Your India Holidays',
      description: 'Immersive Travel Booking Experience',
      image: '/india_holidays.png',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      link: 'https://yourindiaholidays.com',
      buttonText: 'View Live Site'
    },
    {
      title: 'iKoho',
      description: 'Premium E-Commerce Store',
      image: '/ikoho-hero.png',
      tags: ['Shopify', 'Liquid', 'Tailwind'],
      link: '/work/ikoho',
      buttonText: 'Read Case Study',
      internal: true
    },
    {
      title: 'Luxe Dentaire',
      description: 'Bright Clinical Luxury Redesign',
      image: '/luxe_dentaire.png',
      tags: ['React', 'Framer Motion', 'Tailwind']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-24 px-4 md:px-6 flex flex-col items-center justify-center min-h-[85vh] md:min-h-[90vh]">
        {/* Brutalist Background Pattern - precise dots */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-6xl mx-auto z-10 w-full text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex flex-col gap-6 md:gap-8 w-full items-center md:items-start"
          >
            <motion.div variants={fadeUpVariant}>
              <span className="inline-block py-2 px-4 md:px-5 bg-glass backdrop-blur-md text-text-main font-bold tracking-widest uppercase border border-border shadow-[4px_4px_0px_var(--color-border)] text-xs md:text-sm">
                Elite Digital Craft
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-[12vw] sm:text-6xl md:text-[8.5rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] font-heading uppercase text-center md:text-left w-full">
              Tactile <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 drop-shadow-sm">Digital</span> <br className="hidden md:block" />
              Storefronts.
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-3xl text-text-muted mt-2 md:mt-4 max-w-2xl font-medium leading-snug md:leading-tight text-center md:text-left">
              We architect brutalist, high-converting digital experiences for premium brands globally.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="mt-8 md:mt-10">
              <Link 
                to="/contact"
                className="brutalist-button inline-block px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold uppercase tracking-widest"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 md:py-32 px-4 md:px-6 border-t border-border bg-secondary relative z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase font-heading">
              Selected <br className="hidden md:block"/><span className="text-accent">Work</span>
            </h2>
            <div className="text-text-muted font-medium tracking-widest uppercase text-sm md:mb-4">
              [ 2024 - 2026 ]
            </div>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              >
                <div className={`w-full md:w-3/5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`brutalist-card p-2 md:p-3 aspect-[4/3] md:aspect-[16/10] relative ${project.link ? 'cursor-pointer' : ''}`}>
                    {project.internal ? (
                      <Link to={project.link} className="block w-full h-full">
                        <motion.div 
                          className="w-full h-full border border-border relative overflow-hidden bg-primary"
                          whileHover={{ scale: 0.98 }}
                          transition={{ duration: 0.5, ease: customEase }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          />
                          
                          <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/20 backdrop-blur-0 md:group-hover:backdrop-blur-md transition-all duration-500 z-10 flex items-center justify-center opacity-0 md:group-hover:opacity-100">
                            <span className="hidden md:inline-block px-6 py-3 border border-border bg-glass backdrop-blur-lg text-text-main font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_var(--color-border)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              {project.buttonText}
                            </span>
                          </div>
                          
                          <div className="md:hidden absolute bottom-4 right-4 z-20">
                            <span className="px-4 py-2 border border-border bg-glass backdrop-blur-xl text-text-main font-bold uppercase tracking-widest text-xs shadow-[2px_2px_0px_var(--color-border)] flex items-center gap-2">
                              View <span className="text-accent">&rarr;</span>
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    ) : project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <motion.div 
                          className="w-full h-full border border-border relative overflow-hidden bg-primary"
                          whileHover={{ scale: 0.98 }}
                          transition={{ duration: 0.5, ease: customEase }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          />
                          
                          {/* Frosted Glass Hover Overlay - adapted for touch */}
                          <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/20 backdrop-blur-0 md:group-hover:backdrop-blur-md transition-all duration-500 z-10 flex items-center justify-center opacity-0 md:group-hover:opacity-100">
                            <span className="hidden md:inline-block px-6 py-3 border border-border bg-glass backdrop-blur-lg text-text-main font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_var(--color-border)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              {project.buttonText}
                            </span>
                          </div>
                          
                          {/* Mobile Always-Visible Tag */}
                          <div className="md:hidden absolute bottom-4 right-4 z-20">
                            <span className="px-4 py-2 border border-border bg-glass backdrop-blur-xl text-text-main font-bold uppercase tracking-widest text-xs shadow-[2px_2px_0px_var(--color-border)] flex items-center gap-2">
                              View <span className="text-accent">&rarr;</span>
                            </span>
                          </div>
                        </motion.div>
                      </a>
                    ) : (
                      <div className="block w-full h-full">
                        <motion.div 
                          className="w-full h-full border border-border relative overflow-hidden bg-primary"
                          whileHover={{ scale: 0.98 }}
                          transition={{ duration: 0.5, ease: customEase }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`w-full md:w-2/5 flex flex-col gap-4 md:gap-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm">
                      0{index + 1}
                    </div>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase font-heading tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-text-muted font-medium mt-1 md:mt-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 border border-border bg-glass backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_var(--color-border)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
