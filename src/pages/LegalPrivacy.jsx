import React from 'react';

const LegalPrivacy = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 lg:px-12 min-h-screen relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-lg mx-auto w-full relative z-10">
        
        <div className="mb-16 border-b border-border pb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 font-heading leading-[0.85]">
            PRIVACY <br/>
            <span className="text-accent">POLICY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted font-medium">
            Last updated: July 2026
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-p:font-medium prose-p:text-text-muted prose-p:leading-relaxed max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Chetan Web Studio, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Technical Data (internet protocol (IP) address, browser type and version, time zone setting and location).
          </p>

          <h2>3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: where we need to perform the contract we are about to enter into or have entered into with you; where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; or where we need to comply with a legal obligation.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2>5. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LegalPrivacy;
