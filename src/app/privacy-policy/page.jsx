import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Chetan Web Studio',
  description: 'Data collection and privacy policies for Chetan Web Studio.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] pt-32 pb-32 px-4 selection:bg-[#F2F2F2] selection:text-[#050505]">
      <div className="max-w-4xl mx-auto border-l border-r border-t border-[#2A2A2A] bg-[#0A0A0A]">
        {/* HEADER */}
        <header className="p-8 md:p-12 border-b border-[#2A2A2A] bg-[#050505]">
          <h1 className="text-4xl md:text-6xl font-black font-heading uppercase leading-[0.9] tracking-tighter">
            Privacy<br/>Policy
          </h1>
          <p className="mt-4 text-[#A0A0A0] font-mono text-sm tracking-widest uppercase">
            LAST_UPDATED: JULY 2026
          </p>
        </header>

        {/* CONTENT */}
        <main className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed text-[#A0A0A0] space-y-12">
          
          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">01 // Data Collection Architecture</h2>
            <p className="mb-4">
              Chetan Web Studio ("We," "Us," or "The Agency") strictly collects information essential for the execution of digital engineering and architectural consulting services. This includes, but is not limited to, corporate contact details, technical infrastructure access logs, and architectural blueprints necessary for project execution.
            </p>
            <p>
              We do not aggregate, sell, or distribute client behavioral data to third-party data brokers. All transmitted intelligence is strictly compartmentalized.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">02 // Telemetry & Cookies</h2>
            <p className="mb-4">
              Our digital properties employ strictly necessary cryptographic cookies and edge-level telemetry to ensure operational stability, rate limiting, and security against automated threats. 
            </p>
            <p>
              By accessing our infrastructure, you consent to the deployment of these functional tokens. We do not utilize intrusive cross-site tracking mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">03 // Client Confidentiality (NDA)</h2>
            <p className="mb-4">
              All proprietary codebases, strategic methodologies, and financial data shared during the discovery and execution phases are protected under strict Non-Disclosure parameters by default. 
            </p>
            <p>
              We maintain enterprise-grade operational security. Access to client staging environments and production databases is restricted via encrypted channels and robust identity verification.
            </p>
          </section>

          <section>
            <h2 className="text-[#F2F2F2] font-bold text-xl uppercase tracking-widest mb-4">04 // Data Retention & Purge Protocols</h2>
            <p>
              Upon successful handover and the conclusion of the maintenance lifecycle, client source data is retained securely for a period of 12 months for compliance and disaster recovery. Following this window, all non-essential production data undergoes cryptographic erasure unless an ongoing retainer agreement is active.
            </p>
          </section>
          
        </main>
      </div>
    </div>
  );
}
