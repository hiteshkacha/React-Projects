import React from 'react';
import PropertyCard from './PropertyCard';

const PopularHomes = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Banana Island Estate",
      beds: "4 Beds",
      size1: "6 Baths",
      size2: "1,200 sqft",
      price: "$1,500,000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Parkview Penthouse",
      beds: "5 Beds",
      size1: "5.5 Baths",
      size2: "2,400 sqft",
      price: "$3,200,000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Eko Atlantic Villa",
      beds: "3 Beds",
      size1: "4 Baths",
      size2: "1,800 sqft",
      price: "$2,100,000"
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Exclusives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Featured Prestige Listings</h2>
        </div>
        <div>
          <a href="#explore" className="font-semibold text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
            Explore Portfolio <span>→</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map(prop => (
          <PropertyCard key={prop.id} {...prop} />
        ))}
      </div>
    </section>
  );
};

export default PopularHomes;
