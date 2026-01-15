"use client";

import { motion } from "framer-motion";
import { Monitor, PenTool, Users, Zap } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Estrategia de Redes",
        description: "Gestión comunitaria y contenido de valor para conectar con tu audiencia real.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Monitor,
        title: "Diseño Web Next.js",
        description: "Sitios web ultrarrápidos, optimizados para SEO y con estética premium.",
        color: "bg-teal-50 text-teal-600"
    },
    {
        icon: PenTool,
        title: "Branding Institucional",
        description: "Identidad visual coherente que transmite los valores de tu institución.",
        color: "bg-purple-50 text-purple-600"
    },
    {
        icon: Zap,
        title: "Automatización n8n",
        description: "Optimizamos tus flujos de trabajo e integaciones para ahorrar tiempo vital.",
        color: "bg-orange-50 text-orange-600"
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-32 bg-white relative">
            {/* Decorative dividers */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lumen-main/20 to-transparent" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-lumen-main font-bold tracking-widest text-sm uppercase mb-3 block">Nuestra Experticia</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumen-dark mb-6">
                        Servicios diseñados para la Misión
                    </h2>
                    <p className="text-gray-600 text-xl font-light">
                        Soluciones integrales donde la tecnología sirve al propósito, y no al revés.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-lumen-dark mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-8 h-1 w-12 bg-gray-100 group-hover:bg-lumen-main transition-colors duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
