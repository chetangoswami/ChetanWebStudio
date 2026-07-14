import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 lg:px-12 min-h-screen relative overflow-hidden flex flex-col justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Header & Info */}
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 font-heading leading-[0.85]">
              GET IN <br/>
              <span className="text-accent">TOUCH.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 font-medium max-w-lg leading-relaxed">
              We collaborate with ambitious brands and people. Let's build something extraordinary together.
            </p>

            <div className="flex flex-col gap-8 mt-16">
              <div className="p-6 border border-border bg-primary brutalist-shadow-sm transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300">
                <h4 className="font-bold text-text-muted uppercase tracking-widest text-xs mb-2">Email</h4>
                <a href="mailto:hello@chetanwebstudio.com" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">hello@chetanwebstudio.com</a>
              </div>
              <div className="p-6 border border-border bg-primary brutalist-shadow-sm transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300">
                <h4 className="font-bold text-text-muted uppercase tracking-widest text-xs mb-2">Location</h4>
                <p className="text-xl md:text-2xl font-bold">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-border p-8 md:p-12 bg-primary brutalist-shadow w-full">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight font-heading mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold uppercase tracking-widest text-xs text-text-muted">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="p-4 bg-background border border-border focus:border-text-main focus:outline-none transition-colors font-medium rounded-none w-full"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold uppercase tracking-widest text-xs text-text-muted">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="p-4 bg-background border border-border focus:border-text-main focus:outline-none transition-colors font-medium rounded-none w-full"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-bold uppercase tracking-widest text-xs text-text-muted">Project Budget</label>
                <select 
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="p-4 bg-background border border-border focus:border-text-main focus:outline-none transition-colors font-medium rounded-none w-full appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a budget range</option>
                  <option value="<2.5k">&lt; $2,500</option>
                  <option value="2.5k-5k">$2,500 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold uppercase tracking-widest text-xs text-text-muted">Project Details</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  rows="5"
                  className="p-4 bg-background border border-border focus:border-text-main focus:outline-none transition-colors font-medium rounded-none resize-none w-full"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-4 w-full py-5 bg-text-main text-primary font-black uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300 brutalist-shadow flex justify-center items-center gap-2"
              >
                Send Message
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
