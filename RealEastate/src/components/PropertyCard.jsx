import React from 'react';

const PropertyCard = ({ image, title, beds, size1, size2, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      <div className="overflow-hidden relative h-64">
        {/* Verification Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm z-10 shadow-lg shadow-blue-900/20">
          Verified Listing
        </div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h3>
        </div>
        
        <div className="flex items-center justify-between text-gray-500 text-sm mb-8 pb-6 border-b border-gray-100 font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            <span>{size1}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m-7 11h4m-4 0v4m0-4l5 5m11-5h-4m4 0v4m0-4l-5 5"></path></svg>
            <span>{size2}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">{price}</span>
          <button className="text-blue-600 px-5 py-2 font-bold hover:text-white hover:bg-blue-600 transition-colors border border-blue-600 rounded-md">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
