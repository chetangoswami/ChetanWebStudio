'use client';

import React, { useRef } from 'react';
import Link from 'next/link';

export default function StudioPage() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-[#F2F2F2] pt-32 pb-32 overflow-hidden">
      <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* HERO SECTION */}
        <div className="md:col-span-12 mb-32 border-b border-[#2A2A2A] pb-16">
          <h1 className="text-[8vw] md:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter font-heading text-[#F2F2F2] mb-8">
            Digital Alchemy.
          </h1>
          <p className="md:col-start-8 md:col-end-13 text-xl md:text-3xl text-[#A0A0A0] font-sans font-medium max-w-3xl">
            We don't just build websites. We engineer digital legacies for the world's most ambitious brands.
          </p>
        </div>

        {/* THE MANIFESTO */}
        <div className="md:col-span-4 border-t border-[#2A2A2A] md:border-t-0 pt-8 md:pt-0">
          <h2 className="text-2xl font-bold uppercase tracking-widest font-sans text-[#F2F2F2]">
            Beyond the Pixel.
          </h2>
        </div>
        <div className="md:col-span-8 md:col-start-5 mb-32">
          <p className="text-2xl md:text-4xl leading-tight font-heading text-[#F2F2F2] text-justify">
            In an era of infinite scroll and digital noise, mediocrity is invisible. At Chetan Web Studio, we reject the template. We are a collective of elite architects, designers, and engineers operating at the bleeding edge of web technology. We practice <em className="text-[#FF3333] not-italic">Digital Alchemy</em>—the meticulous transmutation of raw code and avant-garde design into immersive, high-converting digital real estate.
          </p>
        </div>

        {/* THE PHILOSOPHY */}
        <div className="md:col-span-4 border-t border-[#2A2A2A] pt-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest font-sans text-[#F2F2F2]">
            Uncompromising Precision.
          </h2>
        </div>
        <div className="md:col-span-8 md:col-start-5 border-t border-[#2A2A2A] pt-8 mb-32">
          <p className="text-xl md:text-2xl leading-relaxed font-sans text-[#A0A0A0]">
            We cater exclusively to premium brands that demand excellence. From fluid WebGL interactions that captivate the senses to ultra-performant React/Vite architectures that convert at scale, every line of code we write is a deliberate stroke of craftsmanship. Your digital presence is your most valuable asset. We treat it like a masterpiece.
          </p>
        </div>

        {/* CALL TO ACTION */}
        <div className="md:col-span-12 flex flex-col items-center justify-center py-32 border-t border-[#2A2A2A]">
          <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter mb-12">
            Elevate Your Baseline.
          </h2>
          <Link 
            href="/contact"
            className="inline-block px-12 py-6 border-2 border-[#F2F2F2] text-[#F2F2F2] font-bold text-xl uppercase tracking-widest hover:bg-[#F2F2F2] hover:text-[#050505] transition-all duration-300 ease-[cubic-bezier(0.85,0,0.15,1)]"
          >
            Initiate a Project
          </Link>
        </div>

      </div>
    </main>
  );
}
