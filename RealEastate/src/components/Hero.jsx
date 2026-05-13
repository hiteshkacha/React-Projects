import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 pt-12 md:pt-20 pb-20 md:pb-32 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-900 leading-[1.05] tracking-tight">
          Discover Curated Luxury Properties
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed font-light">
          Exclusive estates tailored to your distinct lifestyle. Let us guide you to the home you deserve, offering white-glove service at every single step.
        </p>
        <div>
          <button className="bg-black text-white font-semibold px-10 py-4 outline-none hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
            Explore Portfolio
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-16 pt-10 border-t border-gray-200 mt-2">
          <div>
            <h3 className="text-4xl font-bold flex items-center gap-1 tracking-tight text-gray-900">1,200 <span className="text-blue-600 text-3xl font-medium">+</span></h3>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-semibold text-xs">Premium Listings</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold flex items-center gap-1 tracking-tight text-gray-900">4,500 <span className="text-blue-600 text-3xl font-medium">+</span></h3>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-semibold text-xs">Elite Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold flex items-center gap-1 tracking-tight text-gray-900">100 <span className="text-blue-600 text-3xl font-medium">+</span></h3>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-semibold text-xs">Industry Awards</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-blue-100 rounded-sm transform translate-x-4 -translate-y-4 shadow-xl z-0"></div>
        <div className="relative h-[400px] md:h-[600px] rounded-bl-[80px] rounded-tr-[80px] overflow-hidden shadow-2xl z-10 border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
