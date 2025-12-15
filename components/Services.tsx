import React from 'react';
import Icon from './Icon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  priceLabel: string;
  priceValue: string;
  priceSub: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, priceLabel, priceValue, priceSub }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-lg">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
      <Icon name={icon} className="text-3xl" />
    </div>
    <div className="flex flex-col gap-1 flex-grow">
      <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm font-normal leading-normal text-text-light/70 dark:text-text-dark/70">
        {description}
      </p>
    </div>
    <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark">
      <p className="text-sm font-medium text-text-light/90 dark:text-text-dark/90">{priceLabel}</p>
      <p className="text-2xl font-bold text-primary">{priceValue}</p>
      <p className="text-xs text-text-light/60 dark:text-text-dark/60">{priceSub}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-12 md:py-20" id="services">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl text-white">Nuestros Servicios</h2>
          <p className="text-base font-normal leading-normal max-w-3xl mx-auto text-gray-200">
            Ofrecemos soluciones integrales y personalizadas para materializar sus proyectos, garantizando calidad, innovación y sostenibilidad en cada etapa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon="home"
            title="Construcción de Viviendas"
            description="Nos especializamos en la construcción de edificaciones de alta calidad, como viviendas unifamiliares y multifamiliares, adaptadas a sus necesidades."
            priceLabel="Precios por m²"
            priceValue="Desde $1,200,000 COP"
            priceSub="*Precio puede variar según acabados."
          />
          <ServiceCard
            icon="forest"
            title="Desarrollo Inmobiliario Sostenible"
            description="Lideramos el desarrollo inmobiliario sostenible integral en Neiva, creando viviendas que fusionan ingeniería moderna y arquitectura bioclimática."
            priceLabel="Inversión inicial"
            priceValue="Desde $250,000,000 COP"
            priceSub="*Proyectos a medida, contáctenos."
          />
          <ServiceCard
            icon="wb_sunny"
            title="Diseño Arquitectónico"
            description="Creamos diseños innovadores y funcionales que respetan el entorno y optimizan el confort, la eficiencia energética y la calidad de vida."
            priceLabel="Tarifas de diseño"
            priceValue="Desde $5,000,000 COP"
            priceSub="*Basado en la complejidad del proyecto."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;