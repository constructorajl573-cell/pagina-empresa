import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      
      {/* Quick Navigation Section */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">Nuestros Servicios</h3>
            <p className="mb-6 text-text-light/70 dark:text-text-dark/70 text-sm">
              Descubra nuestra oferta integral, desde construcción de viviendas hasta desarrollo urbano sostenible.
            </p>
            <Link to="/services" className="inline-block px-6 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">
              Ver Servicios &rarr;
            </Link>
          </div>
          
          <div className="p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">Proyectos Recientes</h3>
            <p className="mb-6 text-text-light/70 dark:text-text-dark/70 text-sm">
              Explore nuestro portafolio de obras que combinan ingeniería moderna y arquitectura bioclimática.
            </p>
            <Link to="/projects" className="inline-block px-6 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">
              Ver Proyectos &rarr;
            </Link>
          </div>
          
          <div className="p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">Conozca la Empresa</h3>
            <p className="mb-6 text-text-light/70 dark:text-text-dark/70 text-sm">
              Sepa más sobre nuestra historia, misión y el equipo detrás de Constructora J&L S.A.S.
            </p>
            <Link to="/about" className="inline-block px-6 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">
              Sobre Nosotros &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Intro to Contact */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tiene un proyecto en mente?</h2>
          <p className="text-xl mb-8 text-white/90">
            Estamos listos para convertir sus ideas en realidad con los más altos estándares de calidad.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-primary text-lg font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
            Contáctenos Hoy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
