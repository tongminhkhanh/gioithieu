
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="mb-6 inline-block animate-bounce">
          <img 
            src="https://picsum.photos/seed/school-logo/100/100" 
            alt="Logo Trường" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg uppercase">
          TRƯỜNG TIỂU HỌC ÍT ONG
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
          Xã Mường La, Tỉnh Sơn La
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Tìm hiểu thêm
          </a>
          <a href="#staff" className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Đội ngũ giáo viên
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse text-white cursor-pointer">
        <a href="#about">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
