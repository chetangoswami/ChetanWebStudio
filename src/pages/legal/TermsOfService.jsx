import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="w-full bg-white dark:bg-[#000000] text-slate-900 dark:text-white pt-32 pb-24 px-4 md:px-8 min-h-screen transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold mb-2">Chetan Web Studio | Udyam Registration Number: UDYAM-DL-11-0165691</p>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Effective Date: July 15, 2026</p>

          <div className="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
              <p>By accessing the Chetan Web Studio website or engaging our services, you agree to be bound by these Terms of Service. We are an elite digital agency providing cutting-edge, high-end React/Vite websites engineered for premium brands.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">2. Intellectual Property & Copyright Transfer</h2>
              <p className="mb-4">Chetan Web Studio retains full copyright, intellectual property rights, and ownership over all design concepts, visual mockups, architecture, and source code during the development phase.</p>
              <p><strong className="text-slate-900 dark:text-white">Explicit Condition of Transfer:</strong> All Intellectual Property (IP) and copyrights transfer to the client <em className="italic font-bold">only</em> upon receipt of final, fully cleared payment for the project. Until such final payment is received, Chetan Web Studio retains absolute ownership of all deliverables.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">3. Payment Terms</h2>
              <p>All invoices must be settled according to the milestone schedule defined in the Master Services Agreement. In accordance with the MSMED Act, 2006, our maximum payment cycle is strictly capped at 45 days. Delayed payments beyond this period will attract statutory interest and may result in an immediate halt of project development and suspension of any deployed assets.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">4. Limitation of Liability (WebGL & Advanced Technical Execution)</h2>
              <p className="mb-4">We build ultra-premium websites utilizing advanced WebGL rendering, Framer Motion, and complex interactive animations.</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-slate-900 dark:text-white">Performance Variances:</strong> Due to the resource-intensive nature of these technologies, performance may naturally vary across older devices, legacy hardware, or outdated browsers.</li>
                <li><strong className="text-slate-900 dark:text-white">No Guarantee of Uninterrupted Service:</strong> While we engineer for robust performance, we provide no absolute guarantee of 100% uptime or completely bug-free operation across all conceivable hardware configurations and browser updates.</li>
                <li><strong className="text-slate-900 dark:text-white">Damages:</strong> Under no circumstances—and strictly complying with the Indian IT Act and applicable laws—shall Chetan Web Studio be liable for any indirect, incidental, special, or consequential damages (including loss of profits, revenue, or data) arising from website downtime, rendering bugs, API limits, or performance issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">5. Governing Law and Jurisdiction</h2>
              <p>These Terms of Service and any separate Master Services Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
