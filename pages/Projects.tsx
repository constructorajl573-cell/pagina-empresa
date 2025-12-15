import React from 'react';

interface ProjectCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    category: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, title, category, description }) => (
    <div className="flex flex-col gap-4 group bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark hover:border-primary/50 transition-all duration-300">
        <div className="overflow-hidden h-64 w-full relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
            <img
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={imageSrc}
                alt={imageAlt}
            />
            <div className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {category}
            </div>
        </div>
        <div className="flex flex-col gap-2 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-text-light/70 dark:text-text-dark/70 line-clamp-3">{description}</p>
            <button className="mt-4 text-primary font-bold text-sm uppercase tracking-wider self-start hover:underline">
                Ver Detalles &rarr;
            </button>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Nuestros Proyectos</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Una muestra de nuestra experiencia transformando planos en realidades tangibles.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Todos', 'Residencial', 'Comercial', 'Institucional'].map((filter) => (
                    <button
                        key={filter}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'Todos' ? 'bg-primary text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBgTefbpi60TcsBe-t13ZmDWCnntv5waxZTdOGZc2gG_EPWQl0hjTfukwjneZfLjoYGCb_qVBYN0FnUnxJcOPw4e-OomQev_GgqaX6g-_1xgOEMP5wCUDSK35uk5TIi0E_D9UpuiMzV09sNlIR6mC179hvjcUA-Rh8_pa-DHjbH92Ft9HCi1CG2dUBqekJoEdImOCwl-MqZtBigXrRgQx9W9OFbeqlSQHbRDsTv1fU1zy1pmGGUD8I9kOVHHO-XwhzgJrpXyls-Ufc"
                    imageAlt="Villa Verde House"
                    title="Villa Verde, Neiva"
                    category="Residencial"
                    description="Un impresionante ejemplo de arquitectura bioclimática moderna, maximizando la luz y ventilación natural para reducir el consumo energético."
                />
                <ProjectCard
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjuqcsObvc8tj02gDsdbdEePSvFGNrKj89quy-hFEcw0M3lBaU_DKOnMbbKaXaDcCdQLeGOTTnl8ja11k7Ae3veLynXXYfB2uqsoPk7TEycl7F3KqC25-qq5q7DHqWC70vA45Bka6qpRdFvHW4xvOKYpYKCsPz3gid4im53gusxJh_3aquFm-vr2cZUs-oDZja9RvaUVH-lX3E3kpDdB8epx_jjo7BQIpI9w5h2BsUK0-NNITTfUeyCp_VZZX-3W5N_lr3UPRO_U"
                    imageAlt="Residencial El Roble"
                    title="Residencial El Roble"
                    category="Residencial"
                    description="Un desarrollo sostenible integral con viviendas de alta eficiencia energética y espacios verdes comunitarios diseñados para la convivencia."
                />
                <ProjectCard
                    imageSrc="https://i.postimg.cc/3x31wDVS/Generated-Image-December-14-2025-7-56AM.png"
                    imageAlt="Edificio Corporativo Central"
                    title="Torre Corporativa Central"
                    category="Comercial"
                    description="Edificio de oficinas de 15 pisos con certificación LEED Gold, diseñado para albergar a las empresas más prestigiosas de la región."
                />
                <ProjectCard
                    imageSrc="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    imageAlt="Casa de Campo Los Pinos"
                    title="Hacienda Los Pinos"
                    category="Residencial"
                    description="Restauración y ampliación de una finca histórica, conservando el patrimonio arquitectónico mientras se integran comodidades modernas."
                />
                <ProjectCard
                    imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    imageAlt="Centro Comercial Plaza Sur"
                    title="Plaza Sur Shopping"
                    category="Comercial"
                    description="Moderno centro comercial con espacios abiertos y ventilación natural, convirtiéndose en el nuevo punto de encuentro de la ciudad."
                />
                <ProjectCard
                    imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                    imageAlt="Biblioteca Pública del Norte"
                    title="Biblioteca Pública del Norte"
                    category="Institucional"
                    description="Espacio cultural diseñado para inspirar, con amplias zonas de lectura y un auditorio para eventos comunitarios."
                />
            </div>
        </div>
    );
};

export default Projects;
