import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, title, description }) => (
  <div className="flex flex-col gap-4 group">
    <div className="overflow-hidden rounded-xl shadow-lg border-2 border-transparent group-hover:border-primary/50 transition-colors">
      <img
        className="h-80 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-12 md:py-20" id="projects">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl text-white">Proyectos Destacados</h2>
        <p className="text-base font-normal leading-normal max-w-3xl mx-auto text-gray-200">
          Explore una selección de nuestros mejores trabajos, que demuestran nuestro compromiso con la calidad, la innovación y el diseño sostenible.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBgTefbpi60TcsBe-t13ZmDWCnntv5waxZTdOGZc2gG_EPWQl0hjTfukwjneZfLjoYGCb_qVBYN0FnUnxJcOPw4e-OomQev_GgqaX6g-_1xgOEMP5wCUDSK35uk5TIi0E_D9UpuiMzV09sNlIR6mC179hvjcUA-Rh8_pa-DHjbH92Ft9HCi1CG2dUBqekJoEdImOCwl-MqZtBigXrRgQx9W9OFbeqlSQHbRDsTv1fU1zy1pmGGUD8I9kOVHHO-XwhzgJrpXyls-Ufc"
          imageAlt="A luxurious modern house with a swimming pool and beautiful landscaping at dusk."
          title="Villa Verde, Neiva"
          description="Un impresionante ejemplo de arquitectura bioclimática moderna, maximizando la luz y ventilación natural."
        />
        <ProjectCard
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjuqcsObvc8tj02gDsdbdEePSvFGNrKj89quy-hFEcw0M3lBaU_DKOnMbbKaXaDcCdQLeGOTTnl8ja11k7Ae3veLynXXYfB2uqsoPk7TEycl7F3KqC25-qq5q7DHqWC70vA45Bka6qpRdFvHW4xvOKYpYKCsPz3gid4im53gusxJh_3aquFm-vr2cZUs-oDZja9RvaUVH-lX3E3kpDdB8epx_jjo7BQIpI9w5h2BsUK0-NNITTfUeyCp_VZZX-3W5N_lr3UPRO_U"
          imageAlt="A stylish modern family home with a two-car garage and manicured front lawn under a clear blue sky."
          title="Residencial El Roble"
          description="Un desarrollo sostenible integral con viviendas de alta eficiencia energética y espacios verdes comunitarios."
        />
      </div>
    </section>
  );
};

export default Projects;