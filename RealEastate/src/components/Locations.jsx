import React from 'react';

const Locations = () => {
  const cities = [
    {
      id: 1,
      name: "Victoria Island",
      count: "120 Exclusive Estates",
      image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto h-full"
    },
    {
      id: 2,
      name: "Ikoyi",
      count: "85 Heritage Homes",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      className: "aspect-[4/3] md:aspect-auto h-full"
    },
    {
      id: 3,
      name: "Lekki Phase 1",
      count: "210 Modern Villas",
      image: "https://images.unsplash.com/photo-1518501239846-976d8b93475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      className: "aspect-[4/3] md:aspect-auto h-full"
    },
    {
      id: 4,
      name: "Abuja Heights",
      count: "150 Mansions",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      className: "md:col-span-2 aspect-[2/1] md:aspect-auto h-full"
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Global Presence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Prestigious Footprints</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
        {cities.map((city) => (
          <div key={city.id} className={`group relative overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${city.className}`}>
            <img 
              src={city.image} 
              alt={city.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16]/90 via-[#0a0f16]/20 to-transparent"></div>
            
            {/* Content Details */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-3xl font-bold mb-2 tracking-tight transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">{city.name}</h3>
              <p className="text-blue-200 text-sm font-semibold tracking-wide uppercase transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">{city.count}</p>
              
              <div className="mt-6 overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-in-out">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-400 transition-colors">
                  Explore Estates <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
