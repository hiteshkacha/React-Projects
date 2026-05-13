import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "White-Glove Service",
      description: "Experience unparalleled attention from our elite advisory board, ensuring your acquisition is smooth, discreet, and tailored entirely to you.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      )
    },
    {
      id: 2,
      title: "Global Portfolio",
      description: "Gain access to an exclusive collection of off-market properties and international estates that redefine the standard of luxury living.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      )
    },
    {
      id: 3,
      title: "Verified Escrow",
      description: "Transact with absolute confidence. Our bank-grade financial infrastructure guarantees the security of your investments.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      )
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-32 bg-[#f8fbfe] border-y border-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[2px] bg-blue-600"></div>
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">The La Maison Standard</span>
          <div className="w-8 h-[2px] bg-blue-600"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Uncompromising Excellence</h2>
        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">We set the benchmark for luxury real estate, providing a comprehensive advisory framework that puts your legacy first.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map(f => (
          <div key={f.id} className="bg-white p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-100 group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
