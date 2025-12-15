import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark mt-auto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <Icon name="business" className="text-primary text-3xl" />
              <h2 className="text-lg font-bold">Constructora J&L S.A.S.</h2>
            </div>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70 max-w-sm">
              Construyendo espacios sostenibles e innovadores para un futuro mejor en Neiva y más allá.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" to="/">Inicio</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Servicios</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/projects">Proyectos</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/about">Nosotros</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contáctenos</h3>
            <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
              <li className="flex items-center gap-2">
                <Icon name="location_on" className="text-base" />
                <span>Av. de la Construcción 123, Neiva</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="text-base" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="email" className="text-base" />
                <span>contacto@constructora-jl.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center text-sm text-text-light/60 dark:text-text-dark/60">
          <p>© 2024 Constructora J&L S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;