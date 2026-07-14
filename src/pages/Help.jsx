import React, { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer full-cycle digital product development, including UI/UX design, frontend and backend engineering, branding, and strategic consulting."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and scope. A standard landing page might take 2-4 weeks, while a complex web application can take 3-6 months. We work in agile sprints to ensure regular deliverables."
  },
  {
    question: "Do you work with startups or established companies?",
    answer: "Both. We partner with ambitious startups to build MVPs and scale their products, and we collaborate with enterprise companies on digital transformation and bespoke software solutions."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We typically work on fixed-price contracts for well-defined projects, or on a time-and-materials basis for ongoing development and strategy work. Let's discuss your requirements to get an accurate estimate."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer post-launch support and maintenance retainers to ensure your product remains secure, performant, and up-to-date with the latest web standards."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-border border-x last:border-b-0 first:border-t hover:bg-background transition-colors duration-300">
    <button 
      onClick={onClick}
      className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none"
    >
      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight font-heading pr-8">
        {question}
      </h3>
      <span className="text-accent transition-transform duration-300 transform" style={{ rotate: isOpen ? '180deg' : '0deg' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </span>
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="p-6 md:p-8 pt-0 text-lg text-text-muted font-medium leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

const Help = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 lg:px-12 min-h-screen relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-text-main) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-screen-xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Header */}
        <div className="lg:sticky lg:top-32 lg:w-1/3">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 font-heading leading-[0.85]">
            HOW CAN <br/>
            WE <span className="text-accent">HELP?</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted font-medium mb-8">
            Find answers to frequently asked questions about our process, pricing, and capabilities.
          </p>
          <a href="mailto:support@chetanwebstudio.com" className="inline-flex items-center gap-2 px-8 py-4 bg-primary border border-border font-bold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all duration-300 brutalist-shadow-sm">
            Contact Support
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full lg:w-2/3 border border-border bg-primary brutalist-shadow">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Help;
