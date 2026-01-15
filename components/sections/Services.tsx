"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Briefcase, Users } from "lucide-react";

const services = [
    {
        name: "Initium",
        subtitle: "El Primer Paso",
        icon: Sparkles,
        price: "$297",
        description: "Auditoría estratégica completa para diagnóstico inicial.",
        borderColor: "border-lumen-creative",
        features: ["Análisis de presencia digital", "Roadmap estratégico", "Sesión de consultoría"]
    },
    {
        name: "Verbum Pro",
        subtitle: "La Palabra que Conecta",
        icon: Layers,
        price: "$897",
        description: "Gestión integral de contenido y redes sociales.",
        borderColor: "border-lumen-vision",
        features: ["Estrategia de contenido", "Gestión de redes", "Reportes mensuales"]
    },
    {
        name: "Plenitude",
        subtitle: "Presencia Completa",
        icon: Briefcase,
        price: "$2,497",
        description: "Transformación digital con web y branding profesional.",
        borderColor: "border-lumen-energy",
        features: ["Sitio web Next.js", "Identidad de marca", "SEO avanzado"]
    },
    {
        name: "Divinitas",
        subtitle: "Excelencia Total",
        icon: Users,
        price: "Custom",
        description: "Solución enterprise para instituciones de gran escala.",
        borderColor: "border-lumen-structure",
        features: ["Todo en Plenitude", "Automatización n8n", "Soporte dedicado"]
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 md:py-32 bg-white">
            <div className="container px-6 md:px-8 mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-lumen-creative font-medium tracking-widest text-sm uppercase mb-4 block">
                        Nuestros Servicios
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumen-structure mb-6">
                        Soluciones para la Misión
                    </h2>
                    <p className="text-lg text-lumen-structure/60 leading-relaxed">
                        Cuatro niveles de servicio diseñados para acompañar cada etapa de tu transformación digital.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-lumen-clarity hover:shadow-2xl transition-all duration-500 rounded-lg p-8 border-t-4 ${service.borderColor}`}
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <service.icon size={32} className="text-lumen-structure/80" />
                            </div>

                            {/* Name & Subtitle */}
                            <h3 className="font-serif text-2xl font-bold text-lumen-structure mb-1">
                                {service.name}
                            </h3>
                            <p className="text-sm text-lumen-creative font-medium mb-4">
                                {service.subtitle}
                            </p>

                            {/* Price */}
                            <p className="text-3xl font-bold text-lumen-vision mb-4">
                                {service.price}
                            </p>

                            {/* Description */}
                            <p className="text-base text-lumen-structure/60 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-lumen-structure/70">
                                        <span className="w-1.5 h-1.5 rounded-full bg-lumen-creative" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
