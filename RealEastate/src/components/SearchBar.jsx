import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 -mt-10 md:-mt-16 relative z-30">
      <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] p-8 md:p-10 max-w-5xl mx-auto border border-gray-50/50">
        <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Find Your Perfect Estate</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Location Input */}
          <div className="flex-1 relative border-b-2 border-gray-100 hover:border-gray-300 focus-within:border-blue-600 transition-colors">
            <input 
              type="text" 
              placeholder="Preferred Location" 
              className="w-full px-2 py-3 outline-none text-gray-900 placeholder-gray-400 bg-transparent font-medium"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
          </div>
          
          {/* Property Type Input */}
          <div className="flex-1 relative border-b-2 border-gray-100 hover:border-gray-300 focus-within:border-blue-600 transition-colors">
            <input 
              type="text" 
              placeholder="Property Type" 
              className="w-full px-2 py-3 outline-none text-gray-900 placeholder-gray-400 bg-transparent font-medium"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
          </div>
          
          {/* Budget Input */}
          <div className="flex-1 relative border-b-2 border-gray-100 hover:border-gray-300 focus-within:border-blue-600 transition-colors">
            <input 
              type="text" 
              placeholder="Max Budget" 
              className="w-full px-2 py-3 outline-none text-gray-900 placeholder-gray-400 bg-transparent font-medium"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
            </div>
          </div>

          {/* Search Button */}
          <div className="md:w-40 pt-2 md:pt-0 text-center flex items-end">
            <button className="w-full bg-blue-600 text-white font-bold tracking-wide py-3.5 rounded-md hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
