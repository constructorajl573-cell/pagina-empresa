import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Sobre Nosotros</h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Construyendo sueños con solidez, innovación y compromiso sostenible desde 2010.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Constructora J&L S.A.S. nació con la visión de transformar el paisaje urbano de Neiva mediante proyectos que no solo sean estéticamente imponentes, sino también respetuosos con el medio ambiente.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        A lo largo de más de una década, hemos liderado el desarrollo de complejos residenciales y comerciales, ganándonos la confianza de cientos de familias e inversores gracias a nuestra transparencia y cumplimiento.
                    </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJhrVC_wL_2uZUloRbho1-F4DNZYScZM0XYZLJcc3Wh0uY6kZ45O18zFVl6UxrbyOLYTerA9U3fEfZ-j2idqgXqo6raNmJP_xRwjKwEeWS63-3cfd07nhzlFf4U1ge_K6fctuRBb_qPnoZ7npIyxY0QC22wzRsDPvULK1VEKdhB5kh9myTp7o76r2yL4Q9Z7-9JLQm7KFeZIQ5iCGdSeTmq_WHxC4nWXdWqs4FTyByHTCqQhIFBhlXLN0KcYhumILzhFAHaUVtc7Q"
                        alt="Equipo de trabajo en obra"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-border-light dark:border-border-dark">
                    <h3 className="text-2xl font-bold text-primary mb-4">Misión</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80">
                        Desarrollar proyectos inmobiliarios de alta calidad que mejoren la vida de las personas, integrando tecnología y sostenibilidad en cada proceso constructivo.
                    </p>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-border-light dark:border-border-dark">
                    <h3 className="text-2xl font-bold text-primary mb-4">Visión</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80">
                        Ser reconocidos en 2030 como la constructora líder en el huila por nuestra innovación arquitectónica y nuestro compromiso irreductible con el desarrollo sostenible.
                    </p>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-border-light dark:border-border-dark">
                    <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
                    <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 space-y-2">
                        <li>Integridad y Transparencia</li>
                        <li>Excelencia Técnica</li>
                        <li>Responsabilidad Ambiental</li>
                        <li>Compromiso Social</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Nuestro Equipo</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                    Contamos con arquitectos, ingenieros y profesionales apasionados por crear espacios únicos.
                </p>
                {/* Placeholder for team grid if needed, keeping it simple for now */}
            </div>
        </div>
    );
};

export default About;
