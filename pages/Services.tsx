import React from 'react';
import Icon from '../components/Icon';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => (
    <div className="flex flex-col gap-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/20 text-primary">
            <Icon name={icon} className="text-4xl" />
        </div>
        <div>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-3">{title}</h3>
            <p className="text-base text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-light/80 dark:text-text-dark/80">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Nuestros Servicios</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Soluciones integrales de construcción diseñadas para superar expectativas y perdurar en el tiempo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                    icon="home"
                    title="Construcción Residencial"
                    description="Desde casas unifamiliares hasta complejos de apartamentos, construimos hogares pensando en el confort, la funcionalidad y la estética."
                    features={[
                        "Diseño personalizado de viviendas",
                        "Construcción llave en mano",
                        "Acabados de primera calidad",
                        "Gestión integral de licencias"
                    ]}
                />
                <ServiceCard
                    icon="forest"
                    title="Desarrollo Sostenible"
                    description="Implementamos tecnologías y prácticas de construcción verde para minimizar el impacto ambiental y reducir costos energéticos a largo plazo."
                    features={[
                        "Certificación EDGE / LEED",
                        "Sistemas de recolección de aguas lluvias",
                        "Paneles solares integrados",
                        "Materiales eco-amigables"
                    ]}
                />
                <ServiceCard
                    icon="wb_sunny"
                    title="Diseño Arquitectónico"
                    description="Nuestro equipo de arquitectos plasma sus ideas en planos innovadores que optimizan el espacio, la luz y la ventilación natural."
                    features={[
                        "Modelado 3D y Renders realistas",
                        "Diseño bioclimático",
                        "Paisajismo y urbanismo",
                        "Planificación de interiores"
                    ]}
                />
                <ServiceCard
                    icon="business"
                    title="Infraestructura Comercial"
                    description="Construimos espacios comerciales, oficinas y bodegas que impulsan la productividad y proyectan la mejor imagen de su negocio."
                    features={[
                        "Locales comerciales modernos",
                        "Oficinas corporativas optimizadas",
                        "Bodegas industriales",
                        "Reforzamiento estructural"
                    ]}
                />
            </div>

            <div className="mt-20 bg-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
                <h2 className="text-3xl font-bold text-white mb-4">¿Necesita una solución a medida?</h2>
                <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                    Entendemos que cada proyecto es único. Hable con nuestros expertos para desarrollar una propuesta que se ajuste exactamente a sus requerimientos.
                </p>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-opacity">
                    Solicitar Asesoría Personalizada
                </button>
            </div>
        </div>
    );
};

export default Services;
