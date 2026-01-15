"use client";

import { motion } from "framer-motion";
import { Eye, Link2, Award, Heart, Compass } from "lucide-react";

const values = [
    { icon: Eye, name: "Claridad", description: "Comunicación transparente y directa" },
    { icon: Link2, name: "Coherencia", description: "Alineación entre mensaje y acción" },
    { icon: Award, name: "Profesionalismo", description: "Estándares de excelencia en todo" },
    { icon: Heart, name: "Humanidad", description: "El centro siempre es la persona" },
    { icon: Compass, name: "Discernimiento", description: "Decisiones guiadas por propósito" },
];

const Philosophy = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-lumen-vision to-lumen-creative">
            <div className="container px-6 md:px-8 mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-lumen-energy font-medium tracking-widest text-sm uppercase mb-4 block">
                        Nuestra Filosofía
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumen-clarity mb-6">
                        Valores que nos Guían
                    </h2>
                    <p className="text-lg text-lumen-clarity/80 leading-relaxed">
                        Cinco pilares fundamentales que definen cómo trabajamos y por qué lo hacemos.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-lumen-clarity/10 flex items-center justify-center group-hover:bg-lumen-clarity/20 transition-colors duration-400">
                                <value.icon size={28} className="text-lumen-clarity" />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-lumen-clarity mb-2">
                                {value.name}
                            </h3>
                            <p className="text-sm text-lumen-clarity/70 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
