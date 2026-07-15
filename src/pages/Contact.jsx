import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectDetails: ''
  });

  useEffect(() => {
    document.title = 'Start a Project | Chetan Web Studio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Ready to build something extraordinary? Contact Chetan Web Studio to start your ultra-premium web design project. Based in New Delhi, serving global elite brands.');
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.budget && formData.projectDetails && captchaToken !== null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "513dd3f6-971d-4854-9a9c-c12877220454",
            "h-captcha-response": captchaToken,
            ...formData,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          setFormData({ name: '', email: '', company: '', budget: '', projectDetails: '' });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Copy) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-32 space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight leading-tight">
              Let's Build Something Extraordinary.
            </h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              Fill out the form, and our Director will be in touch within 24 hours.
            </p>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">Direct Contact</h3>
              <p className="text-lg font-medium hover:text-accent transition-colors"><a href="mailto:hello@chetanwebstudio.com">hello@chetanwebstudio.com</a></p>
              <p className="text-lg font-medium text-text-muted mt-2">New Delhi, India</p>
            </div>
          </motion.div>

          {/* Right Column (Form Elements) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="bg-primary border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Minimalist decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16 relative z-10">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4">Inquiry Sent</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  Thank you for reaching out. Our Director will review your brief and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 rounded-full font-bold border-2 border-border hover:border-text-main transition-colors text-text-main"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-text-main">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-text-main transition-colors text-lg"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-text-main">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-text-main transition-colors text-lg"
                  placeholder="john@elitebrand.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-text-main">Company / Brand Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-text-main transition-colors text-lg"
                  placeholder="Elite Brand Inc."
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-semibold text-text-main">Project Budget</label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-text-main transition-colors text-lg text-text-muted appearance-none"
                  required
                >
                  <option value="" disabled>Select a budget range</option>
                  <option value="$10k+">$10k+</option>
                  <option value="$25k+">$25k+</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>

              <div className="space-y-2 pb-4">
                <label htmlFor="projectDetails" className="text-sm font-semibold text-text-main">Project Details</label>
                <textarea 
                  id="projectDetails" 
                  name="projectDetails" 
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-text-main transition-colors text-lg resize-none"
                  placeholder="Tell us about your project and objectives..."
                  required
                />
              </div>

              <div className="flex justify-center pb-2">
                <HCaptcha 
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" 
                  onVerify={(token) => setCaptchaToken(token)} 
                  onExpire={() => setCaptchaToken(null)} 
                />
              </div>

              <button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 rounded-full text-lg font-bold transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-text-main text-primary hover:bg-accent hover:text-white cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1' 
                    : 'bg-border text-text-muted cursor-not-allowed opacity-70'
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
