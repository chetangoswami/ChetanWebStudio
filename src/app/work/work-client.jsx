'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ikohoImg from '../../assets/ikoho.png';
import yihImg from '../../assets/yourindiaholidays.png';
import Link from 'next/link';

const projects = [
  { id: 1, name: 'Ikoho Architecture', year: '2025', scope: 'Web / UX', img: ikohoImg.src, slug: 'ikoho' },
  { id: 2, name: 'Your India Holidays', year: '2024', scope: 'Platform / AI', img: yihImg.src, slug: 'your-india-holidays' },
];

export default function WorkPage() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    let xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.4, ease: "power3"});
    let yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.4, ease: "power3"});

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (img) => {
    setHoveredImg(img);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setHoveredImg(null)
      });
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-[#F2F2F2] font-heading lg:cursor-none pt-32 pb-32">
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center opacity-0 scale-0 origin-center" 
        style={{ width: 0, height: 0 }}
      >
        <div className="w-[300px] h-[400px] bg-[#F2F2F2] overflow-hidden -translate-x-1/2 -translate-y-1/2">
          {hoveredImg && (
            <img 
              src={hoveredImg} 
              alt="Project thumbnail" 
              className="w-full h-full object-cover mix-blend-normal opacity-90"
            />
          )}
        </div>
      </div>

      <div className="max-w-[90vw] mx-auto">
        <div className="mb-24 px-4">
          <h1 className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter mix-blend-difference text-[#F2F2F2]">
            The <br/> Archive
          </h1>
        </div>

        <div className="flex flex-col border-t border-[#2A2A2A]">
          {projects.map((project, i) => (
            <Link 
              href={`/work/${project.slug}`}
              key={project.id}
              className="group border-b border-[#2A2A2A] py-12 px-4 hover:bg-[#F2F2F2] transition-colors duration-[0ms] ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col md:flex-row items-baseline justify-between block"
              onMouseEnter={() => handleMouseEnter(project.img || ikohoImg.src)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-[5vw] md:text-[3.5vw] font-black uppercase leading-[0.9] tracking-tighter group-hover:text-[#050505]">
                {project.name}
              </h2>
              <div className="flex gap-8 text-[#A0A0A0] group-hover:text-[#050505] font-sans mt-4 md:mt-0 font-medium tracking-widest text-sm uppercase">
                <span>{project.scope}</span>
                <span>{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
