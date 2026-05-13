import React from 'react';

const Testimonial = () => {
  return (
    <section className="w-full bg-[#0a0f16] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start md:items-center mb-20 border-b border-gray-800 pb-20">
        
        {/* Left - Large Quote */}
        <div className="w-full md:w-2/3 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-blue-500"></div>
            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Client Perspectives</span>
          </div>
          <div className="absolute -top-10 -left-6 text-gray-800 text-[120px] font-serif leading-none opacity-50 z-0">"</div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-8 relative z-10 text-gray-300">
            Our business is built on close relationships, and we are glad to share our positive experiences. La Maison delivers excellence at every distinct step.
          </p>
        </div>

        {/* Right - Profile */}
        <div className="w-full md:w-1/3 flex flex-col md:items-end md:text-right border-l md:border-l-0 md:border-r border-gray-800 pl-6 md:pr-6 md:pl-0">
          <h4 className="font-bold text-2xl text-white tracking-tight mb-1">Kevin Durant</h4>
          <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-4">Founder, Thirty Five Ventures</p>
        </div>
      </div>

      {/* Bottom Logos Section */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32 items-center opacity-70">
        <div className="flex flex-col items-center gap-4 hover:opacity-100 hover:text-blue-400 transition-all cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20h4v8h-4v-8zm6-4h4v12h-4V16zm6-4h4v16h-4V12zm6 8h4v8h-4v-8z"/>
          </svg>
          <span className="tracking-widest text-sm font-semibold uppercase">Equinix</span>
        </div>
        
        <div className="flex flex-col items-center gap-4 hover:opacity-100 hover:text-blue-400 transition-all cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10h6l6 8-6 8h-6l6-8-6-8zM8 10h4v16H8V10zm20 0h4v16h-4V10z"/>
          </svg>
          <span className="tracking-widest text-sm font-semibold uppercase">Digital Realty</span>
        </div>

        <div className="hidden md:flex flex-col items-center gap-4 hover:opacity-100 hover:text-blue-400 transition-all cursor-pointer">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20h4v8h-4v-8zm6-4h4v12h-4V16zm6-4h4v16h-4V12zm6 8h4v8h-4v-8z"/>
          </svg>
          <span className="tracking-widest text-sm font-semibold uppercase">Vanguard</span>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-4 hover:opacity-100 hover:text-blue-400 transition-all cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10h6l6 8-6 8h-6l6-8-6-8zM8 10h4v16H8V10zm20 0h4v16h-4V10z"/>
          </svg>
          <span className="tracking-widest text-sm font-semibold uppercase">BlackRock</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
