import React from 'react';
import { motion } from 'framer-motion';

const LegalPrivacy = () => {
  return (
    <div className="w-full bg-white dark:bg-[#000000] text-slate-900 dark:text-white pt-32 pb-24 px-4 md:px-8 min-h-screen transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold mb-2">Chetan Web Studio | Udyam Registration Number: UDYAM-DL-11-0165691</p>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Effective Date: July 15, 2026</p>

          <div className="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">1. Introduction</h2>
              <p>Welcome to Chetan Web Studio ("we," "our," or "us"). We are an elite digital agency specializing in premium, cutting-edge web experiences. This Privacy Policy outlines our practices regarding the collection, use, and protection of your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">2. Compliance Framework</h2>
              <p className="mb-2">This policy is strictly engineered to comply with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-900 dark:text-white">GDPR (General Data Protection Regulation):</strong> For users interacting with us from the European Economic Area (EEA).</li>
                <li><strong className="text-slate-900 dark:text-white">The Information Technology Act, 2000 & IT Rules, 2011 (India):</strong> Ensuring reasonable security practices and procedures for sensitive personal data or information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">3. Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us (e.g., name, email, company details via contact forms) and technical data automatically collected when you visit our high-performance WebGL websites (e.g., IP address, browser type, device specifications, and usage analytics).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">4. How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, manage, and optimize our ultra-premium digital services.</li>
                <li>To communicate with you regarding project updates, proposals, and sales inquiries.</li>
                <li>To improve our technical infrastructure and website performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">5. GDPR Data Subject Rights</h2>
              <p className="mb-2">If you are a resident of the EEA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, correct, or delete your personal data.</li>
                <li>Restrict or object to data processing.</li>
                <li>Data portability.</li>
              </ul>
              <p>To exercise these rights, please contact our Data Protection Officer.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">6. Data Security (Indian IT Act Compliance)</h2>
              <p>In compliance with Rule 8 of the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, we implement comprehensive ISMS (Information Security Management System) standards. We safeguard your data against unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">7. Grievance Officer</h2>
              <p className="mb-4">In accordance with the Indian IT Act, the name and contact details of the Grievance Officer are provided below:</p>
              <ul className="list-none space-y-2 mb-4">
                <li><strong className="text-slate-900 dark:text-white">Name:</strong> Legal Department, Chetan Web Studio</li>
                <li><strong className="text-slate-900 dark:text-white">Email:</strong> hello@chetanwebstudio.com</li>
              </ul>
              <p>We aim to acknowledge any grievances within 24 hours and resolve them within 1 month of receipt.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPrivacy;
