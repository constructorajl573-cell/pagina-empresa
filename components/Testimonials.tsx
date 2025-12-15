import React from 'react';

interface TestimonialCardProps {
  quote: string;
  imageSrc: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, imageSrc, name, role }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-8 shadow-lg">
    <p className="text-base italic text-gray-800 dark:text-gray-200">"{quote}"</p>
    <div className="flex items-center gap-4 mt-2">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={imageSrc}
        alt={`Portrait of ${name}`}
      />
      <div>
        <p className="font-bold text-gray-900 dark:text-white">{name}</p>
        <p className="text-sm text-text-light/70 dark:text-text-dark/70">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-20" id="nosotros">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-base font-normal leading-normal max-w-3xl mx-auto text-gray-200">
            Nuestra reputación se basa en la confianza, la calidad y la completa satisfacción de nuestros clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <TestimonialCard
            quote="Constructora J&L S.A.S. transformó nuestra visión en una realidad. Su atención al detalle y compromiso con la sostenibilidad fue evidente en cada paso del proceso. No podríamos estar más felices con nuestro nuevo hogar."
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBdEBBl97KhwCrPw0cM32zVHbsDIMNnCSH9RkBHzpi8rR7Lc9s7K2yo3Ydk6H_PHwZSrF8NUgLZAUZxLaR1BdvlCi8-z2kQ2cJPjqu6AqBzm500Ho4SAFPbBGKMj9VXE1VXyrVCv1dy_JviyIcmzEzeoOEPhp7XUmoS-YErL_ZnEjOgEay6Ph3dJ8TIQIK271Pi9gPZ87CxuduGkVY25_-weI-xBLgwzonaPIXAPE0tihdeSFEAPHBiTF5W5Pko6s6KDbicAKDuS0U"
            name="Carlos Ramírez"
            role="Propietario, Villa Verde"
          />
          <TestimonialCard
            quote="El profesionalismo y el enfoque innovador del equipo de J&L fueron excepcionales. Entregaron un edificio de alta calidad y eficiencia energética a tiempo y dentro del presupuesto. Muy recomendados."
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDVjwdvFR5Wiatews2Hbb-UpVBpAX6n6H1GIDhP5hrcV62pzDZvQlotrNdJMl_Dh7tbUHpdd_BpAH8Q1SiWpJreC3irjKKnLTZNfUDLVFxzhsKdWKPC_qWDW9zz9SZPIu2zbPqGzBHT6rsH594mj3Iff_isg3wqcqKVE_VXlR__IsL7qAxCLJKWymmnv8NfVasScdameJIZxJPvpZWF9L5fQw6XcGTiA7_e6EZXY-5iNOyeiAENqD4U7pCkmMXxj2QIEspATU_fQhw"
            name="Sofía Gaviria"
            role="Gerente de Proyecto, El Roble"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;