import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between bg-transparent z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xl rounded-sm group-hover:bg-blue-600 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </div>
        <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">La Maison</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        <a href="#home" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">Home</a>
        <a href="#about" className="text-gray-500 font-semibold hover:text-blue-600 transition-colors">About Us</a>
        <a href="#properties" className="text-gray-500 font-semibold hover:text-blue-600 transition-colors">Properties</a>
        <a href="#agents" className="text-gray-500 font-semibold hover:text-blue-600 transition-colors">Agents</a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="border-2 border-gray-900 text-gray-900 font-bold px-8 py-2.5 hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-widest text-xs">
          Client Portal
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 focus:outline-none">
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900">Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-500 hover:text-blue-600">About Us</a>
        <a href="#properties" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-500 hover:text-blue-600">Properties</a>
        <a href="#agents" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-500 hover:text-blue-600">Agents</a>
        <button className="mt-4 border-2 border-gray-900 text-gray-900 font-bold px-8 py-3 w-48 hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-widest text-sm">
          Client Portal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
