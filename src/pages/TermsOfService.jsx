import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 lg:px-12 min-h-screen relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-lg mx-auto w-full relative z-10">
        
        <div className="mb-16 border-b border-border pb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 font-heading leading-[0.85]">
            TERMS OF <br/>
            <span className="text-accent">SERVICE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted font-medium">
            Effective Date: July 2026
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-p:font-medium prose-p:text-text-muted prose-p:leading-relaxed max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Chetan Web Studio and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2>3. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Chetan Web Studio, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Chetan Web Studio, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>
          
          <h2>5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State/Country in which Chetan Web Studio is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;
