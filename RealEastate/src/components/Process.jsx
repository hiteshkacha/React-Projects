import React from 'react';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Evaluate Portfolio",
      description: "Browse our curated, off-market listings and select properties that meet your exacting standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      )
    },
    {
      id: "02",
      title: "Private Consultation",
      description: "Get paired with a dedicated La Maison advisor who will manage viewings and bespoke negotiations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      )
    },
    {
      id: "03",
      title: "Secure Acquisition",
      description: "Our legal and financial teams handle complex escrow processes securely and discreetly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-32 bg-white relative">
      <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Acquisition Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">A Seamless Path to Ownership</h2>
          <p className="text-gray-500 mb-10 leading-relaxed font-light text-lg">
            We have stripped away all the complexities of the luxury real estate market to bring you a straightforward, secure, and highly confidential purchasing experience.
          </p>
          <button className="bg-black text-white px-10 py-4 font-bold tracking-wide hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
            Commence Search
          </button>
        </div>

        {/* Right Content - Steps */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[15%] left-[10%] w-[80%] h-[1px] bg-gray-200 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col bg-white pt-4">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center text-blue-600 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                 {step.icon}
              </div>
              <span className="text-gray-100 font-black text-7xl absolute top-0 right-4 -z-10 select-none">{step.id}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
