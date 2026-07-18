'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ikohoImg from '../../assets/ikoho.png';
import yihImg from '../../assets/yourindiaholidays.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimatedHero() {
  const containerRef = useRef(null);
  const act2Ref = useRef(null);
  const monolithLeftRef = useRef(null);
  const monolithRightRef = useRef(null);
  const promenadeWrapperRef = useRef(null);
  const promenadeRef = useRef(null);
  const glowRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let animationFrameId;

    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const render = () => {
      if (glowRef.current) {
        const x = (mouseX / window.innerWidth) * 100;
        const y = (mouseY / window.innerHeight) * 100;
        glowRef.current.style.setProperty('--mouse-x', `${x}%`);
        glowRef.current.style.setProperty('--mouse-y', `${y}%`);
      }

      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCardMouseEnter = () => {
    if (cursorInnerRef.current) {
      gsap.to(cursorInnerRef.current, {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(cursorTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        delay: 0.1
      });
    }
  };

  const handleCardMouseLeave = () => {
    if (cursorInnerRef.current) {
      gsap.to(cursorInnerRef.current, {
        width: 10,
        height: 10,
        backgroundColor: '#FFFFFF',
        backdropFilter: 'blur(0px)',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(cursorTextRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.2
      });
    }
  };

  const handleMagneticEnter = (e) => {
    if (cursorInnerRef.current) {
      gsap.to(cursorInnerRef.current, {
        scale: 3,
        mixBlendMode: 'difference',
        backgroundColor: '#fff',
        duration: 0.3
      });
    }
  };

  const handleMagneticLeave = (e) => {
    if (cursorInnerRef.current) {
      gsap.to(cursorInnerRef.current, {
        scale: 1,
        mixBlendMode: 'normal',
        backgroundColor: '#fff',
        duration: 0.3
      });
    }
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };

  const handleMagneticMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    gsap.to(e.currentTarget, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  useGSAP(() => {
    // Act 1: Text split stagger on load
    const words = gsap.utils.toArray('.hero-word');
    if (words.length > 0) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }

    let mm = gsap.matchMedia(containerRef);
    mm.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      // Act 2: The Rupture
      if (act2Ref.current && monolithLeftRef.current && monolithRightRef.current) {
        const ruptureTl = gsap.timeline({
          scrollTrigger: {
            trigger: act2Ref.current,
            start: 'top top',
            end: isMobile ? '+=600' : '+=1200',
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        });

        ruptureTl.to(monolithLeftRef.current, {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          ease: 'none'
        }, 0);

        ruptureTl.to(monolithRightRef.current, {
          clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
          ease: 'none'
        }, 0);
      }

      // Act 3: Horizontal Scroll (Pin & Translate)
      if (promenadeWrapperRef.current && promenadeRef.current) {
        const wrapper = promenadeWrapperRef.current;
        const container = promenadeRef.current;

        const getScrollAmount = () => {
          return -(container.scrollWidth - window.innerWidth);
        };

        const tween = gsap.to(container, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: isMobile ? '+=1200' : '+=2000',
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            pinSpacing: true
          }
        });

        // Horizontal Parallax
        const cards = gsap.utils.toArray('.parallax-img', container);
        cards.forEach((img) => {
          gsap.fromTo(
            img,
            { x: '-10%' },
            {
              x: '10%',
              ease: 'none',
              scrollTrigger: {
                trigger: img.closest('.portfolio-card'),
                containerAnimation: tween,
                start: 'left right',
                end: 'right left',
                scrub: true
              }
            }
          );
        });
      }
    });

    // Act 4: Capabilities Grid Fade-Up
    const gridItems = gsap.utils.toArray('.capability-item');
    if (gridItems.length > 0) {
      gsap.fromTo(
        gridItems,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities-grid',
            start: 'top 80%',
          }
        }
      );
    }

    // Act 5: Marquee Scroll Velocity
    const marquee = document.querySelector('.animate-marquee-wrapper');
    if (marquee) {
      ScrollTrigger.create({
        trigger: marquee,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const skew = gsap.utils.clamp(-20, 20, velocity / 100);
          gsap.to(marquee, { skewX: skew, duration: 0.8, ease: 'power3.out', overwrite: 'auto', force3D: true });
        }
      });
    }

    // Act 6 Text Split
    const act6Lines = gsap.utils.toArray('.act6-text-line');
    if (act6Lines.length > 0) {
      gsap.fromTo(
        act6Lines,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.act6-section',
            start: 'top 75%'
          }
        }
      );
    }

  }, { scope: containerRef });

  const scrollToAct2 = () => {
    if (act2Ref.current) {
      act2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const words = ['We', 'Build', 'Digital', 'Prestige.'];

  return (
    <div ref={containerRef} className="w-full font-sans bg-[#0a0a0a]">
      
      {/* CUSTOM CURSOR */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center mix-blend-difference" 
        style={{ width: 0, height: 0 }}
      >
        <div 
          ref={cursorInnerRef}
          className="bg-white rounded-full flex items-center justify-center absolute pointer-events-none"
          style={{ width: '10px', height: '10px', transform: 'translate(-50%, -50%)', transition: 'width 0.3s, height 0.3s, background-color 0.3s' }}
        >
          <span 
            ref={cursorTextRef} 
            className="text-[#0a0a0a] text-[14px] font-bold tracking-[1px] opacity-0 scale-50 font-sans"
          >
            VIEW
          </span>
        </div>
      </div>

      {/* ACT 1: HERO */}
      <section className="relative h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Glow */}
        <div 
          ref={glowRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(30,144,255,0.08), transparent 70%)',
            transition: 'background 0.1s ease-out'
          }}
        />
        
        <div className="z-10 text-center px-4">
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter text-[#f0f0f0] font-heading leading-tight flex flex-wrap justify-center gap-x-4 md:gap-x-8">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-4">
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-[#a0a0a0] font-medium max-w-2xl mx-auto font-sans">
            Premium Next.js & React Experiences for Elite Brands
          </p>
        </div>

        <button 
          onClick={scrollToAct2}
          onMouseEnter={handleMagneticEnter}
          onMouseLeave={handleMagneticLeave}
          onMouseMove={handleMagneticMove}
          className="absolute bottom-12 text-[#f0f0f0] text-sm md:text-base font-medium tracking-widest uppercase hover:text-[#1E90FF] transition-colors duration-300 flex flex-col items-center gap-2 z-10 p-4"
        >
          View Our Work
          <span className="animate-bounce">↓</span>
        </button>
      </section>

      {/* ACT 2: THE RUPTURE */}
      <section ref={act2Ref} className="h-screen w-full relative bg-[#f0f0f0] overflow-hidden">
        
        {/* The Wall - Left */}
        <div 
          ref={monolithLeftRef}
          className="absolute top-0 left-0 h-full w-1/2 bg-[#0a0a0a] z-20 flex items-center justify-end"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
        </div>
        
        {/* The Wall - Right */}
        <div 
          ref={monolithRightRef}
          className="absolute top-0 right-0 h-full w-1/2 bg-[#0a0a0a] z-20 flex items-center justify-start"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
        </div>

        {/* Revealed Content Behind Wall */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <h2 className="text-5xl md:text-[6rem] font-black tracking-tighter text-[#0a0a0a] font-heading uppercase text-center">
            Selected<br />Works
          </h2>
        </div>
      </section>

      {/* ACT 3: PORTFOLIO PROMENADE */}
      <section ref={promenadeWrapperRef} className="w-full bg-[#f0f0f0] overflow-hidden flex items-center min-h-screen">
        <div 
          ref={promenadeRef}
          className="flex w-max gap-8 md:gap-16 px-[5vw] md:px-[20vw] items-center"
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .outline-draw { outline: 1px solid transparent; outline-offset: 10px; transition: outline-color 0.4s ease, outline-offset 0.4s ease; }
            .outline-draw:hover { outline-color: #1E90FF; outline-offset: -10px; }
            .portfolio-card, .portfolio-card * { cursor: none !important; }
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Intro Card */}
          <div className="shrink-0 w-[85vw] md:w-[40vw] flex flex-col justify-center h-[60vh]">
            <span className="text-sm font-bold tracking-[0.2em] text-[#666] uppercase mb-4 block">
              The Archive
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0a0a0a] uppercase leading-[0.9] font-heading">
              Our<br/>Legacy
            </h2>
          </div>

          {/* Portfolio Card 1 */}
          <Link 
            href="/work/ikoho"
            className="portfolio-card shrink-0 w-[85vw] md:w-[60vw] group block"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="outline-draw relative aspect-[16/9] bg-[#0a0a0a] overflow-hidden mb-8 pointer-events-none">
              <Image 
                src={ikohoImg} 
                alt="Ikoho Architecture" 
                fill
                sizes="(max-width: 768px) 85vw, 60vw"
                className="parallax-img object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-[1.2]" 
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-3 text-[#0a0a0a] font-heading pointer-events-none">Ikoho Architecture</h3>
            <p className="text-[#333] font-medium text-lg md:text-xl max-w-2xl font-sans pointer-events-none">
              Multi-phased technical overhaul resolving critical bottlenecks in mobile conversions and multimedia pipelines.
            </p>
          </Link>

          {/* Portfolio Card 2 */}
          <Link 
            href="/work/your-india-holidays"
            className="portfolio-card shrink-0 w-[85vw] md:w-[60vw] group block"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="outline-draw relative aspect-[16/9] bg-[#0a0a0a] overflow-hidden mb-8 pointer-events-none">
              <Image 
                src={yihImg} 
                alt="Your India Holidays" 
                fill
                sizes="(max-width: 768px) 85vw, 60vw"
                className="parallax-img object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-[1.2]" 
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-3 text-[#0a0a0a] font-heading pointer-events-none">Your India Holidays</h3>
            <p className="text-[#333] font-medium text-lg md:text-xl max-w-2xl font-sans pointer-events-none">
              Transformed a raw AI prototype into a secure, edge-powered production platform with context-aware itinerary planning.
            </p>
          </Link>

          {/* Outro CTA Card */}
          <div className="shrink-0 w-[85vw] md:w-[40vw] flex flex-col justify-center items-start h-[60vh] pr-[10vw]">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0a0a0a] uppercase mb-8 font-heading">
              Ready to<br/>Scale?
            </h2>
            <Link 
              href="/contact" 
              onMouseEnter={handleMagneticEnter}
              onMouseLeave={handleMagneticLeave}
              onMouseMove={handleMagneticMove}
              className="inline-flex items-center px-8 py-4 bg-[#0a0a0a] text-[#f0f0f0] font-bold text-lg hover:bg-[#1E90FF] hover:text-white transition-colors duration-300 rounded-none cursor-none"
            >
              Start Your Project →
            </Link>
          </div>

        </div>
      </section>

      {/* ACT 4: CAPABILITIES GRID */}
      <section className="w-full bg-[#0a0a0a] text-white py-24 px-4 md:px-8 border-t border-[#222]">
        <h2 className="sr-only">Our Capabilities</h2>
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <p className="text-[#A0A0A0] text-sm md:text-base font-bold tracking-widest uppercase italic font-sans">
            Trusted by elite brands globally. Engineered for unparalleled ROI.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#222] capabilities-grid">
          {/* Grid item 1 */}
          <div 
            className="capability-item bg-[#121212] p-8 md:p-16 relative overflow-hidden group cursor-none"
            onMouseEnter={handleMagneticEnter}
            onMouseLeave={handleMagneticLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="text-[#888] text-sm font-bold tracking-widest uppercase mb-6 relative z-10">01 // Development</h3>
            <h4 className="text-3xl md:text-4xl font-black mb-4 font-heading relative z-10 group-hover:text-[#1E90FF] transition-colors duration-300">Next-Gen Development</h4>
            <p className="text-lg text-[#ccc] leading-relaxed relative z-10 font-sans">
              We engineer high-performance platforms that transcend standard web design, merging aesthetic dominance with ruthless scalability.
            </p>
          </div>
          {/* Grid item 2 */}
          <div 
            className="capability-item bg-[#121212] p-8 md:p-16 relative overflow-hidden group cursor-none"
            onMouseEnter={handleMagneticEnter}
            onMouseLeave={handleMagneticLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="text-[#888] text-sm font-bold tracking-widest uppercase mb-6 relative z-10">02 // Spatial Computing</h3>
            <h4 className="text-3xl md:text-4xl font-black mb-4 font-heading relative z-10 group-hover:text-[#1E90FF] transition-colors duration-300">WebGL & 3D Environments</h4>
            <p className="text-lg text-[#ccc] leading-relaxed relative z-10 font-sans">
              Unlock immersive digital experiences. Our advanced WebGL architectures captivate users and command absolute category authority.
            </p>
          </div>
          {/* Grid item 3 */}
          <div 
            className="capability-item bg-[#121212] p-8 md:p-16 relative overflow-hidden group cursor-none"
            onMouseEnter={handleMagneticEnter}
            onMouseLeave={handleMagneticLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="text-[#888] text-sm font-bold tracking-widest uppercase mb-6 relative z-10">03 // Motion Design</h3>
            <h4 className="text-3xl md:text-4xl font-black mb-4 font-heading relative z-10 group-hover:text-[#1E90FF] transition-colors duration-300">Micro-interactions</h4>
            <p className="text-lg text-[#ccc] leading-relaxed relative z-10 font-sans">
              Every click, scroll, and hover is meticulously choreographed. We build physics-based, kinetic interfaces that feel intuitive and alive.
            </p>
          </div>
          {/* Grid item 4 */}
          <div 
            className="capability-item bg-[#121212] p-8 md:p-16 relative overflow-hidden group cursor-none"
            onMouseEnter={handleMagneticEnter}
            onMouseLeave={handleMagneticLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="text-[#888] text-sm font-bold tracking-widest uppercase mb-6 relative z-10">04 // Algorithmic Design</h3>
            <h4 className="text-3xl md:text-4xl font-black mb-4 font-heading relative z-10 group-hover:text-[#1E90FF] transition-colors duration-300">Conversion Architecture</h4>
            <p className="text-lg text-[#ccc] leading-relaxed relative z-10 font-sans">
              Striking design demands measurable impact. We deploy data-driven UX strategies to maximize user engagement and accelerate high-ticket conversions.
            </p>
          </div>
        </div>
      </section>

      {/* ACT 5: TECH MARQUEE */}
      <section className="w-full bg-[#1E90FF] py-8 overflow-hidden">
        <div className="animate-marquee-wrapper whitespace-nowrap flex font-heading text-5xl md:text-8xl font-black text-[#0a0a0a] tracking-tighter uppercase">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translate3d(0%, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .animate-marquee-wrapper {
              will-change: transform;
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
              will-change: transform;
            }
          `}} />
          <div className="animate-marquee flex shrink-0">
            <span className="pr-8">NEXT.JS 15 • THREE.JS • WEBGL • GSAP • VERCEL EDGE • TYPESCRIPT • TAILWIND CSS • FRAMER MOTION • SUPABASE • FIGMA • </span>
            <span className="pr-8">NEXT.JS 15 • THREE.JS • WEBGL • GSAP • VERCEL EDGE • TYPESCRIPT • TAILWIND CSS • FRAMER MOTION • SUPABASE • FIGMA • </span>
          </div>
        </div>
      </section>

      {/* ACT 6: THE CONVERSION / CTA */}
      <section className="act6-section w-full bg-[#0a0a0a] text-white min-h-[80vh] flex flex-col items-center justify-center relative px-4 text-center overflow-hidden">
        {/* Animated noise texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <style dangerouslySetInnerHTML={{ __html: `
            .animated-grain {
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
          `}} />
          <div className="animated-grain"></div>
        </div>

        <div className="z-10 max-w-6xl overflow-hidden perspective-[1000px]">
          <h2 className="act6-text-line text-[clamp(2.5rem,6vw,7rem)] font-black leading-[1] font-heading tracking-tighter uppercase mb-4">
            At Chetan Web Studio,
          </h2>
          <h2 className="act6-text-line text-[clamp(2.5rem,6vw,7rem)] font-black leading-[1] font-heading tracking-tighter uppercase mb-8">
            we don't just build websites.
          </h2>
          <h2 className="act6-text-line text-[clamp(2.5rem,6vw,7rem)] font-black leading-[1] font-heading tracking-tighter uppercase mb-8 text-[#1E90FF]">
            We engineer digital legacies.
          </h2>
        </div>
        
        <div className="overflow-hidden perspective-[1000px] max-w-4xl">
          <p className="act6-text-line text-xl md:text-2xl text-[#a0a0a0] font-medium mx-auto mb-16 z-10 font-sans">
            Join the ranks of industry leaders who have scaled their presence and secured exceptional ROI through our premium digital solutions.
          </p>
        </div>

        <div className="overflow-hidden perspective-[1000px]">
          <div className="act6-text-line flex flex-col items-center">
            <Link 
              href="/contact"
              onMouseEnter={handleMagneticEnter}
              onMouseLeave={handleMagneticLeave}
              onMouseMove={handleMagneticMove}
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-[#0a0a0a] font-black text-xl md:text-2xl tracking-widest uppercase overflow-hidden z-10 transition-transform hover:scale-105 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none cursor-none mb-6"
            >
              <span className="absolute inset-0 w-0 bg-[#1E90FF] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                [ INITIATE PROJECT ]
              </span>
            </Link>
            <p className="text-[#888] text-sm font-medium font-sans italic tracking-wide relative z-10">
              Schedule a confidential discovery call to explore your brand’s potential.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
