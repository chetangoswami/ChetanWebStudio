'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactPage() {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    scale: '',
    timeline: '',
    details: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if(errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateStep = () => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = true;
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
      if (!formData.company) newErrors.company = true;
    } else if (currentStep === 2) {
      if (!formData.service) newErrors.service = true;
    } else if (currentStep === 3) {
      if (!formData.scale) newErrors.scale = true;
    } else if (currentStep === 4) {
      if (!formData.timeline) newErrors.timeline = true;
      if (!formData.details) newErrors.details = true;
      if (!hcaptchaToken) newErrors.captcha = true;
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      // Shake animation
      gsap.fromTo('.error-shake', 
        { x: -10 },
        { x: 10, duration: 0.1, yoyo: true, repeat: 3, ease: 'power1.inOut', onComplete: () => gsap.set('.error-shake', { x: 0 }) }
      );
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      const currentElement = document.getElementById(`step-${currentStep}`);
      const nextElement = document.getElementById(`step-${currentStep + 1}`);
      
      const tl = gsap.timeline();
      tl.to(currentElement, {
        x: '-100%',
        opacity: 0,
        duration: 0.6,
        ease: 'cubic-bezier(0.85, 0, 0.15, 1)',
        onComplete: () => setCurrentStep(prev => prev + 1)
      });
      tl.fromTo(nextElement, 
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'cubic-bezier(0.85, 0, 0.15, 1)' },
        "-=0.4"
      );
    }
  };

  const prevStep = () => {
    const currentElement = document.getElementById(`step-${currentStep}`);
    const prevElement = document.getElementById(`step-${currentStep - 1}`);
    
    const tl = gsap.timeline();
    tl.to(currentElement, {
      x: '100%',
      opacity: 0,
      duration: 0.6,
      ease: 'cubic-bezier(0.85, 0, 0.15, 1)',
      onComplete: () => setCurrentStep(prev => prev - 1)
    });
    tl.fromTo(prevElement, 
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.6, ease: 'cubic-bezier(0.85, 0, 0.15, 1)' },
      "-=0.4"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateStep()) {
      setIsSubmitting(true);
      
      const payload = {
        access_key: "513dd3f6-971d-4854-9a9c-c12877220454",
        subject: `New Lead: ${formData.company} - ${formData.service}`,
        'h-captcha-response': hcaptchaToken,
        ...formData
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        
        if (result.success) {
          setIsSuccess(true);
        } else {
          alert('Submission failed. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#050505] text-[#F2F2F2] overflow-x-hidden flex flex-col font-sans pt-28 md:pt-32">
      
      {/* HEADER */}
      <header className="w-full flex flex-row justify-between items-center p-4 md:p-8 border-b border-[#2A2A2A] z-10 bg-[#050505]">
        <div>
          <h1 className="text-sm md:text-xl font-bold uppercase tracking-widest text-[#F2F2F2]">Initiate Your Transformation.</h1>
          <p className="text-[#A0A0A0] text-xs md:text-sm mt-1 font-mono">Apply to partner with Chetan Web Studio.</p>
        </div>
        <div className="font-mono text-sm md:text-2xl font-bold tracking-widest text-[#F2F2F2] whitespace-nowrap">
          [ 0{currentStep} / 0{totalSteps} ]
        </div>
      </header>

      {/* FORM CONTAINER */}
      <main className="flex-grow w-full grid grid-cols-1">
        {isSuccess ? (
          <div className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center px-4 py-12">
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-6 text-[#F2F2F2]">Transmission Received.</h2>
            <p className="text-[#A0A0A0] text-xl max-w-2xl font-mono">Our architects will review your blueprint and initiate contact shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="col-start-1 row-start-1 w-full max-w-4xl mx-auto grid grid-cols-1 px-4">
          
          {/* STEP 1 */}
          <div id="step-1" className={`col-start-1 row-start-1 flex flex-col justify-start md:justify-center py-12 md:py-16 ${currentStep === 1 ? 'z-10' : 'z-0 opacity-0 pointer-events-none'}`}>
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-12 text-[#F2F2F2]">Who are we speaking with?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
              <div className={`p-8 bg-[#050505] flex flex-col ${errors.name ? 'error-shake' : ''}`}>
                <label htmlFor="name" className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4">
                  FULL NAME_
                  {errors.name && <span className="text-[#FF3333] ml-2">ERR: REQUIRED</span>}
                </label>
                <div className="flex items-center text-xl md:text-2xl font-mono text-[#555]">
                  [ <input 
                      type="text" 
                      name="name" 
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-[#F2F2F2] focus:outline-none mx-2 placeholder-[#222]"
                      placeholder="JOHN DOE"
                    /> ]
                </div>
              </div>

              <div className={`p-8 bg-[#050505] flex flex-col ${errors.email ? 'error-shake' : ''}`}>
                <label htmlFor="email" className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4">
                  EMAIL ADDRESS_
                  {errors.email && <span className="text-[#FF3333] ml-2">ERR: INVALID</span>}
                </label>
                <div className="flex items-center text-xl md:text-2xl font-mono text-[#555]">
                  [ <input 
                      type="email" 
                      name="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-[#F2F2F2] focus:outline-none mx-2 placeholder-[#222]"
                      placeholder="JOHN@VISIONARY.COM"
                    /> ]
                </div>
              </div>

              <div className={`p-8 bg-[#050505] flex flex-col md:col-span-2 ${errors.company ? 'error-shake' : ''}`}>
                <label htmlFor="company" className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4">
                  COMPANY NAME_
                  {errors.company && <span className="text-[#FF3333] ml-2">ERR: REQUIRED</span>}
                </label>
                <div className="flex items-center text-xl md:text-2xl font-mono text-[#555]">
                  [ <input 
                      type="text" 
                      name="company" 
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-[#F2F2F2] focus:outline-none mx-2 placeholder-[#222]"
                      placeholder="ACME CORP"
                    /> ]
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div id="step-2" className={`col-start-1 row-start-1 flex flex-col justify-start md:justify-center py-12 md:py-16 ${currentStep === 2 ? 'z-10' : 'z-0 opacity-0 pointer-events-none'} translate-x-full`}>
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-12 text-[#F2F2F2]">What vision are we bringing to life?</h2>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A] border border-[#2A2A2A] ${errors.service ? 'error-shake' : ''}`}>
              {['Immersive Brand Experience', 'E-Commerce Masterpiece', 'Enterprise Web Application', 'Bespoke Custom Architecture'].map((option, idx) => (
                <label 
                  key={option} 
                  className={`p-8 flex flex-col justify-between min-h-[200px] cursor-pointer transition-colors duration-[0ms] ${formData.service === option ? 'bg-[#F2F2F2] text-[#050505]' : 'bg-[#050505] text-[#F2F2F2] hover:bg-[#111]'}`}
                >
                  <input 
                    type="radio" 
                    name="service" 
                    value={option} 
                    onChange={handleInputChange} 
                    className="hidden" 
                  />
                  <span className="text-sm font-mono font-bold tracking-widest uppercase opacity-50 mb-4">OPT_0{idx + 1}</span>
                  <span className="font-bold text-2xl uppercase font-heading">{option}</span>
                </label>
              ))}
            </div>
            {errors.service && <span className="text-[#FF3333] font-bold font-mono mt-4 block uppercase tracking-widest">ERR: SELECT_ONE_OPTION</span>}
          </div>

          {/* STEP 3 */}
          <div id="step-3" className={`col-start-1 row-start-1 flex flex-col justify-start md:justify-center py-12 md:py-16 ${currentStep === 3 ? 'z-10' : 'z-0 opacity-0 pointer-events-none'} translate-x-full`}>
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-6 text-[#F2F2F2]">What is the scale of this transformation?</h2>
            <p className="text-[#A0A0A0] text-xl mb-12 max-w-2xl font-mono">Our engagements are comprehensive and bespoke. We cater exclusively to premium and enterprise-grade brand executions.</p>
            
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A2A2A] border border-[#2A2A2A] ${errors.scale ? 'error-shake' : ''}`}>
              {[
                { name: 'Premium Tier', desc: 'Bespoke Design & Advanced Development' },
                { name: 'Enterprise Tier', desc: 'Complex Architecture & Scale' },
                { name: 'Ongoing Partnership', desc: 'Retained Elite Agency Support' }
              ].map((tier, idx) => (
                <label 
                  key={tier.name} 
                  className={`p-8 flex flex-col justify-between min-h-[200px] cursor-pointer transition-colors duration-[0ms] ${formData.scale === tier.name ? 'bg-[#F2F2F2] text-[#050505]' : 'bg-[#050505] text-[#F2F2F2] hover:bg-[#111]'}`}
                >
                  <input 
                    type="radio" 
                    name="scale" 
                    value={tier.name} 
                    onChange={handleInputChange} 
                    className="hidden" 
                  />
                  <span className="text-sm font-mono font-bold tracking-widest uppercase opacity-50 mb-4">TIER_0{idx + 1}</span>
                  <div>
                    <span className="font-bold text-2xl uppercase font-heading block">{tier.name}</span>
                    <span className={`text-sm mt-4 block font-mono ${formData.scale === tier.name ? 'text-[#333]' : 'text-[#888]'}`}>{tier.desc}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.scale && <span className="text-[#FF3333] font-bold font-mono mt-4 block uppercase tracking-widest">ERR: SELECT_ONE_OPTION</span>}
          </div>

          {/* STEP 4 */}
          <div id="step-4" className={`col-start-1 row-start-1 flex flex-col justify-start md:justify-center py-12 md:py-16 ${currentStep === 4 ? 'z-10' : 'z-0 opacity-0 pointer-events-none'} translate-x-full`}>
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-12 text-[#F2F2F2]">The Blueprint.</h2>
            
            <div className="grid grid-cols-1 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
              <div className={`p-8 bg-[#050505] flex flex-col ${errors.timeline ? 'error-shake' : ''}`}>
                <label htmlFor="timeline" className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4">
                  TARGET TIMELINE_
                  {errors.timeline && <span className="text-[#FF3333] ml-2">ERR: REQUIRED</span>}
                </label>
                <div className="flex items-center text-xl md:text-2xl font-mono text-[#555]">
                  [ <select 
                      name="timeline" 
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-[#F2F2F2] focus:outline-none mx-2 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#050505] text-[#555]">SELECT_TIMELINE</option>
                      <option value="1-2 Months" className="bg-[#050505]">1-2 MONTHS</option>
                      <option value="3-6 Months" className="bg-[#050505]">3-6 MONTHS</option>
                      <option value="6+ Months" className="bg-[#050505]">6+ MONTHS</option>
                    </select> ]
                </div>
              </div>

              <div className={`p-8 bg-[#050505] flex flex-col ${errors.details ? 'error-shake' : ''}`}>
                <label htmlFor="details" className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4">
                  CORE CHALLENGE_
                  {errors.details && <span className="text-[#FF3333] ml-2">ERR: REQUIRED</span>}
                </label>
                <div className="flex text-xl md:text-2xl font-mono text-[#555]">
                  [ <textarea 
                      name="details" 
                      id="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full bg-transparent text-[#F2F2F2] focus:outline-none mx-2 resize-none placeholder-[#222]"
                      placeholder="DESCRIBE YOUR ARCHITECTURAL NEEDS..."
                    ></textarea> ]
                </div>
              </div>
              
              <div className={`p-8 bg-[#050505] ${errors.captcha ? 'error-shake border-t border-[#FF3333]' : ''}`}>
                <label className="text-[#A0A0A0] text-sm uppercase font-mono font-bold tracking-widest mb-4 block">
                  HUMAN VERIFICATION_
                  {errors.captcha && <span className="text-[#FF3333] ml-2">ERR: CAPTCHA_REQUIRED</span>}
                </label>
                <HCaptcha sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" onVerify={setHcaptchaToken} theme="dark" />
              </div>
            </div>
          </div>

        </form>
        )}
      </main>

      {/* FOOTER CONTROLS */}
      {!isSuccess && (
        <footer className="w-full border-t border-[#2A2A2A] bg-[#050505] z-10 shrink-0">
          <div className="max-w-4xl mx-auto flex justify-between items-center h-24 px-4">
            <button 
              type="button" 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`text-sm md:text-xl font-bold uppercase tracking-widest ${currentStep === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:text-[#A0A0A0] transition-colors'}`}
            >
              ← Back
            </button>
            
            {currentStep < totalSteps ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="text-sm md:text-xl font-bold uppercase tracking-widest px-6 md:px-12 h-full border-l border-r border-[#2A2A2A] hover:bg-[#F2F2F2] hover:text-[#050505] transition-all duration-[0ms] hover:scale-[0.98] group"
              >
                Next Step <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </button>
            ) : (
              <button 
                type="button" 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`text-sm md:text-xl font-bold uppercase tracking-widest px-6 md:px-12 h-full border-l border-r border-[#2A2A2A] bg-transparent text-[#F2F2F2] transition-all duration-[0ms] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F2F2F2] hover:text-[#050505] hover:scale-[0.98]'}`}
              >
                {isSubmitting ? 'SUBMITTING...' : 'Submit Application'}
              </button>
            )}
          </div>
        </footer>
      )}

    </div>
  );
}
