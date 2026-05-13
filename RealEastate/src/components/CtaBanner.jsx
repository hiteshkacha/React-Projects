import React from 'react';

const CtaBanner = () => {
  return (
    <section className="w-full py-32 px-6 relative bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed border-t-8 border-blue-600">
      <div className="absolute inset-0 bg-[#061e38]/80 z-0 mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center py-24 border border-white/5 bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-16 shadow-2xl">
        <div className="relative w-24 h-24 mx-auto mb-10">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
          <button className="relative w-full h-full bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
        <span className="text-blue-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Immersive Experience</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          Step Inside Before You Step Foot In
        </h2>
        <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Unlock our high-definition 3D tours and explore our most exclusive properties from anywhere in the world. No appointments necessary.
        </p>
        <button className="bg-white text-[#061e38] px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
          Launch Virtual Tour
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
