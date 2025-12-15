import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-12 md:py-20" id="contact">
      <div className="rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight">Inicie su Proyecto Hoy</h2>
            <p className="mt-2 text-text-light/70 dark:text-text-dark/70">
              ¿Listo para construir su futuro? Contáctenos para discutir sus ideas. Estamos aquí para ayudar a dar vida a su proyecto.
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="name">Nombre</label>
              <input
                className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-2 px-3"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">Correo Electrónico</label>
              <input
                className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-2 px-3"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="message">Mensaje</label>
              <textarea
                className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-2 px-3"
                id="message"
                name="message"
                rows={4}
              ></textarea>
            </div>
            <button
              className="flex w-full md:w-auto md:self-start min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-text-light text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity"
              type="submit"
            >
              <span className="truncate">Enviar Mensaje</span>
            </button>
          </form>
        </div>
        <div
          className="min-h-[300px] lg:min-h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIlPzELujoCQLK13Zu9IAD0HJCBpAEM7Z6Jw83T4l7-JsIPl0rnNqxulJL42bu-flk7vr6XhPutYfwOPVGNvJVZNqQdNlhNokK8eLbZRMv36gM3C8mBVcRMtviJEAG1RoRELkczRFpbyDC-xPv6MfuybpLJj6J3Yl3mbJnPr_YthQx-SDbUC3erQwespPzXTMDDJzKVx0Diu03xdK-jl9ayNfDErdOrXGDlm95JorY5pTCX7rPhGopKUvfvoM5bFJ88CpDD5Q4wgc")' }}
        ></div>
      </div>
    </section>
  );
};

export default Contact;