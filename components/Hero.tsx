import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div 
        className="flex min-h-[500px] flex-col gap-8 rounded-xl items-center justify-center text-center p-6 md:p-10" 
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Constructora J&L S.A.S.
          </h1>
          <h2 className="text-primary text-2xl md:text-3xl font-bold leading-tight">
            Obras Innovadoras
          </h2>
          <p className="text-gray-200 text-base md:text-lg font-normal leading-normal max-w-3xl mx-auto">
            Fusionamos ingeniería moderna con arquitectura bioclimática para construir futuros sostenibles en Neiva.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
            <span className="truncate">Ver Proyectos</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md text-white border border-white/20 text-base font-bold leading-normal tracking-wide hover:bg-white/20 transition-colors">
            <span className="truncate">Contáctanos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;