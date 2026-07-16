import React from 'react';

export const metadata = {
  title: 'Terms of Service | Chetan Web Studio',
  description: 'Legal terms and service agreements for Chetan Web Studio.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] pt-32 pb-32 px-4 selection:bg-[#F2F2F2] selection:text-[#050505]">
      <div className="max-w-4xl mx-auto border-l border-r border-t border-[#2A2A2A] bg-[#0A0A0A]">
        {/* HEADER */}
        <header className="p-8 md:p-12 border-b border-[#2A2A2A] bg-[#050505]">
          <h1 className="text-4xl md:text-6xl font-black font-heading uppercase leading-[0.9] tracking-tighter">
            Terms of<br/>Service
          </h1>
          <p className="mt-4 text-[#A0A0A0] font-mono text-sm tracking-widest uppercase">
            DOCUMENT_REF: CWS-TOS-2026
          </p>
        </header>

        {/* CONTENT */}
        <main className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed text-[#A0A0A0] space-y-12">
          
          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">01 // Acceptable Use & Architecture Integrity</h2>
            <p className="mb-4">
              By accessing Chetan Web Studio's digital infrastructure, you agree to interface with our systems as intended. We strictly prohibit the deployment of automated scraping algorithms, reverse-engineering of our WebGL architectures, or any attempts to compromise the structural integrity of our servers.
            </p>
            <p>
              Unauthorized mirroring of our source code or aggressive penetration testing without explicit cryptographic authorization will result in immediate IP blacklisting and potential legal escalation.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">02 // Intellectual Property & Portfolio Assets</h2>
            <p className="mb-4">
              The digital blueprints, case study methodologies, branding elements, and kinetic typographies displayed on this domain are the exclusive intellectual property of Chetan Web Studio or our respective clients. 
            </p>
            <p className="text-[#FF3333]">
              WARNING: Replicating our portfolio designs, duplicating our proprietary animations, or plagiarizing our technical copy for use in external agencies or personal portfolios constitutes a direct violation of international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">03 // Limitation of Liability</h2>
            <p className="mb-4">
              The content provided on this digital property is for informational and architectural demonstration purposes only. Chetan Web Studio makes no guarantees regarding the uninterrupted availability of this domain or the absolute accuracy of the technical metrics presented in historical case studies.
            </p>
            <p>
              Under no circumstances shall the Agency be held liable for any direct, indirect, or consequential damages arising from the use or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">04 // Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed strictly in accordance with the laws of India. Any technical or usage-related disputes arising from the navigation of this website shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>
          </section>
          
        </main>
      </div>
    </div>
  );
}
