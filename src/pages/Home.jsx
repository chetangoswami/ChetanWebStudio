import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Points, PointMaterial } from '@react-three/drei';
import ikohoImg from '../assets/ikoho.png';
import yihImg from '../assets/yourindiaholidays.png';

const Particles = () => {
  const ref = useRef(null);
  const scrollVelocityRef = useRef(0);
  const particlesCount = 3000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 25; 
    }
    return pos;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if(!ref.current) return;
    if (window.scrollY > 1500) return;
    const currentScroll = window.scrollY;
    const deltaScroll = currentScroll - (state.lastScroll || 0);
    state.lastScroll = currentScroll;
    
    // Smooth scroll velocity
    scrollVelocityRef.current = THREE.MathUtils.lerp(scrollVelocityRef.current, deltaScroll, 0.1);
    
    // Slipstream effect: Push particles backward on fast scroll
    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, -Math.abs(scrollVelocityRef.current) * 0.2, 0.1);

    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 2, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 2, 0.05);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#94a3b8" size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
};

const FluidGlass = () => {
  const meshRef = useRef(null);
  const scrollVelocityRef = useRef(0);

  useFrame((state) => {
    if(!meshRef.current) return;
    if (window.scrollY > 1500) return;
    const currentScroll = window.scrollY;
    const deltaScroll = currentScroll - (state.lastScroll || 0);
    state.lastScroll = currentScroll;
    scrollVelocityRef.current = THREE.MathUtils.lerp(scrollVelocityRef.current, deltaScroll, 0.1);

    const t = state.clock.getElapsedTime();
    
    // Rotate based on scroll progress
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
    const scrollProgress = currentScroll / maxScroll;
    
    meshRef.current.rotation.x = Math.cos(t / 4) / 2 + scrollProgress * Math.PI * 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2 + scrollProgress * Math.PI;
    meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
    
    // Distort/stretch on fast scroll
    const stretch = 1.5 + Math.abs(scrollVelocityRef.current) * 0.02;
    meshRef.current.scale.set(1.5, stretch, 1.5);

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.pointer.x * 2, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (state.pointer.y * 2) + Math.sin(t / 2), 0.05);
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <MeshTransmissionMaterial 
        backside
        backsideThickness={5}
        thickness={2}
        chromaticAberration={0.02}
        anisotropicBlur={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={3}
        resolution={256}
        transmission={0.95}
        roughness={0.2}
        color="#f8fafc"
        ior={1.33}
      />
    </mesh>
  );
};

const WorkItem = ({ title, category, description, link, imageSrc, align }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // FIX 2 — Disable image parallax on mobile to prevent scroll jank
  const isMobileItem = typeof window !== 'undefined' && window.innerWidth < 768;
  // We use robust whileInView for fading to guarantee visibility, leaving scrollYProgress purely for the image parallax.
  const imageY = useTransform(scrollYProgress, [0, 1], isMobileItem ? ['0%', '0%'] : ["-15%", "15%"]);

  // Defensive DOM guard check for good measure
  useEffect(() => {
    if (!ref.current) return;
    // element safely mounted
  }, []);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${align === 'right' ? '' : 'lg:max-w-none'}`}
    >
      <div className={`order-2 flex flex-col ${align === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
        <span className="text-sm font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase mb-4 block">
          {category}
        </span>
        <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium">
          {description}
        </p>
        <div>
          <Link to={link} className="inline-flex items-center text-slate-900 dark:text-white font-bold hover:opacity-70 transition-opacity border-b-2 border-slate-900 dark:border-white pb-1 text-lg">
            Explore Case Study
          </Link>
        </div>
      </div>
      
      <div className={`order-1 ${align === 'right' ? 'lg:order-2' : 'lg:order-1'} aspect-[4/3] lg:aspect-[16/10] w-full bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 transition-colors duration-500`}>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center w-full h-[120%] top-[-10%] will-change-transform transform-gpu"
          style={{ y: imageY }}
        >
          <img src={imageSrc} alt={title} className="w-full h-full object-cover object-top" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  // FIX 1 & 3 — Detect mobile once for WebGL + floating shapes
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scaleShape = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 0.5]);

  const heroTextY = useTransform(heroScrollYProgress, [0, 1], [0, 300]);
  const heroTextOpacity = useTransform(heroScrollYProgress, [0, 0.8], [1, 0]);

  const textX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textX2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  useEffect(() => {
    document.title = 'Chetan Web Studio | Ultra-Premium Web Design Agency India';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Chetan Web Studio engineers $10,000+ ultra-premium React websites for elite brands. Based in New Delhi, India. Serving global clientele.');
    }
  }, []);

  useEffect(() => {
    // Defensive DOM guard
    if (!containerRef.current) return;
    containerRef.current.setAttribute('data-theme', 'avant-garde-light');
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white dark:bg-[#000000] text-slate-900 dark:text-white overflow-hidden relative min-h-[300vh] transition-colors duration-500">
      
      {/* Floating Abstract Shapes — FIX 3: hidden on mobile to reduce paint layers */}
      {!isMobile && (
        <>
          <motion.div 
            className="fixed top-[10%] left-[5%] w-72 h-72 rounded-full -z-10 opacity-70 pointer-events-none will-change-transform"
            style={{ y: yShape1, rotate: rotateShape, scale: scaleShape, backgroundImage: 'radial-gradient(circle, rgba(226, 232, 240, 0.8) 0%, rgba(255, 255, 255, 0) 70%)' }}
          />
          <motion.div 
            className="fixed top-[60%] right-[5%] w-96 h-96 rounded-full -z-10 opacity-60 pointer-events-none will-change-transform"
            style={{ y: yShape2, rotate: rotateShape, backgroundImage: 'radial-gradient(circle, rgba(226, 232, 240, 0.8) 0%, rgba(255, 255, 255, 0) 70%)' }}
          />
        </>
      )}
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[100svh] flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)'
          }}
        />

        {/* Editorial Borders & Crosshairs */}
        <div className="absolute inset-4 md:inset-8 border border-slate-200/60 pointer-events-none z-0">
          <div className="absolute -top-3 -left-3 text-slate-300 text-2xl font-light leading-none">+</div>
          <div className="absolute -top-3 -right-3 text-slate-300 text-2xl font-light leading-none">+</div>
          <div className="absolute -bottom-3 -left-3 text-slate-300 text-2xl font-light leading-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-slate-300 text-2xl font-light leading-none">+</div>
        </div>

        {/* Minimalist Layout: UI Clutter Removed */}

        {/* WebGL Canvas — FIX 1: skip entirely on mobile for massive perf gain */}
        {!isMobile && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas eventSource={document.body} eventPrefix="client" camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={2} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
              <Environment preset="studio" />
              <Particles />
              <FluidGlass />
            </Canvas>
          </div>
        )}

        {/* Mobile Orb Fallback — CSS gradient orbs replace WebGL on mobile */}
        {isMobile && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 40%, rgba(148, 163, 184, 0.25) 0%, rgba(226, 232, 240, 0.12) 40%, transparent 70%)',
              animation: 'orbPulse 6s ease-in-out infinite',
              filter: 'blur(40px)',
            }} />
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '60%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 60% 60%, rgba(203, 213, 225, 0.2) 0%, transparent 70%)',
              animation: 'orbPulse 8s ease-in-out infinite reverse',
              filter: 'blur(30px)',
            }} />
          </div>
        )}

        <motion.div 
          className="max-w-6xl mx-auto z-10 w-full relative pointer-events-none"
          style={{ y: heroTextY, opacity: heroTextOpacity, skewY: skewVelocity }}
        >
          <div className="flex flex-col items-center justify-center relative z-10 w-full mb-6 mt-4">
            <motion.h1 
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-slate-900 dark:text-white flex flex-col items-center text-center pointer-events-auto"
            >
              <span className="block z-40 relative drop-shadow-sm">WE ARCHITECT</span>
              <span className="block z-30 relative -mt-1 md:-mt-4 drop-shadow-sm">THE FUTURE</span>
              <span className="block z-20 relative -mt-1 md:-mt-4 drop-shadow-sm">OF DIGITAL</span>
              <span className="block z-10 relative -mt-1 md:-mt-4 drop-shadow-sm">PRESTIGE</span>
            </motion.h1>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight relative z-10 pointer-events-auto"
          >
            Ultra-premium digital storefronts engineered for elite brands. Bridging breathtaking aesthetics with ruthless performance.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-30 pointer-events-auto"
          >
            <Link to="/work" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-bold hover:bg-black transition-colors duration-300">
              View Our Work
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-200 rounded-full text-lg font-bold hover:border-slate-900 transition-colors duration-300 backdrop-blur-md">
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Massive Scrolling Typography (Parallax/Scrubbing) */}
      <section className="py-24 flex flex-col gap-8 overflow-hidden bg-white dark:bg-[#000000] relative z-10 border-y border-slate-100 dark:border-slate-900 transition-colors duration-500">
        {/* FIX 4 — Mobile font capped at 4rem (was 6rem) to reduce paint cost */}
        <motion.div style={{ x: textX1 }} className="flex whitespace-nowrap text-[4rem] md:text-[12rem] font-black text-slate-50 dark:text-slate-900/50 tracking-tighter uppercase leading-none select-none transition-colors duration-500 will-change-transform transform-gpu">
          <span className="pr-16">CHETAN WEB STUDIO • AVANT-GARDE • CHETAN WEB STUDIO • AVANT-GARDE</span>
          <span className="pr-16">CHETAN WEB STUDIO • AVANT-GARDE • CHETAN WEB STUDIO • AVANT-GARDE</span>
        </motion.div>
        <motion.div style={{ x: textX2 }} className="flex whitespace-nowrap text-[4rem] md:text-[12rem] font-black text-slate-50 dark:text-slate-900/50 tracking-tighter uppercase leading-none select-none transition-colors duration-500 will-change-transform transform-gpu">
          <span className="pr-16">DIGITAL STOREFRONTS • ELITE BRANDS • DIGITAL STOREFRONTS • ELITE BRANDS</span>
          <span className="pr-16">DIGITAL STOREFRONTS • ELITE BRANDS • DIGITAL STOREFRONTS • ELITE BRANDS</span>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-40 px-4 md:px-8 max-w-[90rem] mx-auto relative z-10">
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 dark:text-white transition-colors duration-500">Selected Works</h2>
          <div className="w-24 h-2 bg-slate-900 dark:bg-white mt-8 transition-colors duration-500"></div>
        </div>

        <div className="space-y-40 md:space-y-64">
          <WorkItem 
            title="Ikoho Architecture" 
            category="Luxury Streetwear"
            description="Multi-phased technical overhaul resolving critical bottlenecks in mobile conversions and multimedia pipelines, scaling their brand presence exponentially."
            link="/work"
            imageSrc={ikohoImg}
            align="right"
          />
          <WorkItem 
            title="Your India Holidays" 
            category="Enterprise AI Travel"
            description="Transformed a raw AI prototype into a secure, edge-powered production platform with context-aware itinerary planning and hyper-fast booking experiences."
            link="/work"
            imageSrc={yihImg}
            align="left"
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-40 px-4 md:px-8 bg-slate-900 dark:bg-[#0a0a0a] text-white relative z-10 rounded-t-[3rem] md:rounded-t-[6rem] mt-20 transition-colors duration-500 border-t border-transparent dark:border-slate-800">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-40 gap-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase max-w-3xl leading-[0.9]">Elite Standards For Elite Brands.</h2>
            <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-lg leading-relaxed">
              We don't build generic templates. We architect digital masterpieces that dominate your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              {
                title: "Apple-Grade Aesthetics",
                copy: "We refuse to compromise on design. Every pixel is placed with intent, ensuring your brand communicates ultimate authority."
              },
              {
                title: "Relentless Performance",
                copy: "Built on modern edge stacks. We write clean, scalable code that loads in milliseconds. Speed is the ultimate currency."
              },
              {
                title: "Conversion Engineered",
                copy: "Beautiful websites that don't sell are just art. We build digital storefronts meticulously optimized to turn traffic into revenue."
              }
            ].map((prop, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col group border-t border-slate-800 dark:border-slate-800 pt-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-slate-500 dark:text-slate-600 font-bold tracking-widest uppercase mb-6 flex items-center gap-4 transition-colors duration-500">
                  <span>0{idx + 1}</span>
                  <div className="h-[1px] w-12 bg-slate-800 dark:bg-slate-700 group-hover:w-24 group-hover:bg-white transition-all duration-500"></div>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{prop.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">{prop.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-[100svh] flex flex-col justify-center items-center py-32 px-4 md:px-8 text-center bg-slate-900 dark:bg-[#050505] text-white relative z-10 transition-colors duration-500 border-t border-transparent dark:border-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-6xl md:text-[9rem] font-black mb-10 tracking-tighter uppercase leading-[0.85]">Ready to <br/> Scale?</h2>
          <p className="text-2xl md:text-3xl text-slate-400 mb-16 font-medium max-w-3xl">
            Partner with Chetan Web Studio to build a platform that outperforms your competition.
          </p>
          <Link to="/contact" className="px-14 py-6 bg-white text-slate-900 rounded-full text-2xl font-black hover:bg-slate-200 hover:scale-105 transition-all duration-500 flex items-center gap-4">
            Start Your Project
            <span className="text-3xl leading-none">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
