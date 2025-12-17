
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Sứ mệnh', href: '#mission' },
    { name: 'Lịch sử', href: '#history' },
    { name: 'Đội ngũ', href: '#staff' },
    { name: 'Cơ sở vật chất', href: '#facilities' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight p-1">
            IT ONG
          </div>
          <span className={`font-bold text-lg hidden md:block ${isScrolled ? 'text-gray-800' : 'text-white shadow-sm'}`}>
            Tiểu Học Ít Ong
          </span>
        </div>
        
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
        >
          Liên hệ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
