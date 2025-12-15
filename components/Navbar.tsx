import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${isActive(path)
      ? 'text-primary dark:text-primary font-bold'
      : 'hover:text-primary dark:hover:text-primary'
    }`;

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="business" className="text-primary text-3xl" />
            <h2 className="text-lg font-bold tracking-tight">Constructora J&L S.A.S.</h2>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} className={linkClass(link.path)} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link to="/contact">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
              <span className="truncate">Cotizar</span>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-light dark:text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name="menu" className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark md:hidden p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={linkClass(link.path)}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;