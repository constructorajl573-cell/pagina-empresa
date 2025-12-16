import React, { useState } from 'react';
import Icon from '../components/Icon';

const CONTACT_WEBHOOK_URL = 'https://constructorajl2004.app.n8n.cloud/webhook-test/contact-form';

interface FormData {
    name: string;
    phone: string;
    email: string;
    interest: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        interest: 'Cotización de Proyecto', // Default value
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const payload = {
                ...formData,
                nombre: formData.name,
                asunto: formData.interest
            };

            const response = await fetch(CONTACT_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    interest: 'Cotización de Proyecto',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const handleCloseModal = () => {
        setStatus('idle');
    };

    return (
        <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Success Modal */}
            {status === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20 transform animate-[scaleUp_0.3s_ease-out]">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Hemos recibido tu solicitud correctamente. Nuestro equipo revisará tu mensaje y te contactará lo antes posible.
                        </p>
                        <button
                            onClick={handleCloseModal}
                            className="w-full py-3.5 px-6 bg-primary text-white font-bold rounded-xl hover:bg-emerald-green transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            ¡Entendido!
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Helper text and Info */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="text-4xl font-black text-white mb-4">Contáctenos</h1>
                        <p className="text-xl text-gray-200">
                            Estamos listos para escuchar sobre su próximo proyecto. Complete el formulario o visítenos en nuestras oficinas.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <Icon name="business" className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Oficina Principal</h3>
                                <p className="text-gray-300">Calle 10 # 5-23, Neiva, Huila</p>
                                <p className="text-gray-300">Edificio Empresarial, Oficina 304</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <Icon name="phone" className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Teléfonos</h3>
                                <p className="text-gray-300">+57 310 123 4567</p>
                                <p className="text-gray-300">(608) 871 5555</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <Icon name="email" className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Correo Electrónico</h3>
                                <p className="text-gray-300">contacto@constructora-jl.com</p>
                                <p className="text-gray-300">proyectos@constructora-jl.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-64 bg-slate-700/50 rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                            [Mapa de Google Maps]
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card-light dark:bg-card-dark p-8 md:p-10 rounded-2xl border border-border-light dark:border-border-dark shadow-xl">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíenos un mensaje</h2>

                    {status === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 flex items-center gap-2">
                            <Icon name="error" className="text-xl" />
                            <span>Hubo un error al enviar el mensaje. Por favor intente nuevamente.</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium text-text-light dark:text-text-dark mb-1 block" htmlFor="name">Nombre</label>
                                <input
                                    className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-3 px-4 outline-none transition-all"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Juan Pérez"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-light dark:text-text-dark mb-1 block" htmlFor="phone">Teléfono</label>
                                <input
                                    className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-3 px-4 outline-none transition-all"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="300 123 4567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-text-light dark:text-text-dark mb-1 block" htmlFor="email">Correo Electrónico</label>
                            <input
                                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-3 px-4 outline-none transition-all"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="juan@ejemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-text-light dark:text-text-dark mb-1 block" htmlFor="interest">Asunto</label>
                            <select
                                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-3 px-4 outline-none transition-all"
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="Cotización de Proyecto">Cotización de Proyecto</option>
                                <option value="Consulta General">Consulta General</option>
                                <option value="Trabaje con Nosotros">Trabaje con Nosotros</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-text-light dark:text-text-dark mb-1 block" htmlFor="message">Mensaje</label>
                            <textarea
                                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary py-3 px-4 outline-none transition-all min-h-[150px]"
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Cómo podemos ayudarle..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="w-full py-4 px-6 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? (
                                <span>Enviando...</span>
                            ) : (
                                <>
                                    <span>Enviar Mensaje</span>
                                    <Icon name="arrow_forward" className="text-lg" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
