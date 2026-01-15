"use client";

import { motion } from "framer-motion";

const Purpose = () => {
    return (
        <section className="py-24 md:py-32 bg-lumen-clarity">
            <div className="container max-w-4xl mx-auto px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Quote */}
                    <blockquote className="border-l-4 border-lumen-creative pl-8">
                        <p className="text-3xl md:text-4xl font-serif text-lumen-structure italic leading-relaxed">
                            "Menos ruido. Más sentido."
                        </p>
                    </blockquote>

                    {/* Tagline */}
                    <div className="pl-8">
                        <p className="text-xl md:text-2xl font-serif text-lumen-vision font-semibold">
                            El orden no mata la inspiración. La hace habitable.
                        </p>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-6 pl-8">
                        <p className="text-lg text-lumen-structure/70 leading-relaxed">
                            No somos solo una agencia; somos arquitectos digitales que entienden que la <strong className="text-lumen-structure">belleza</strong> y el <strong className="text-lumen-structure">orden</strong> son caminos hacia la trascendencia.
                        </p>
                        <p className="text-lg text-lumen-structure/70 leading-relaxed">
                            Unimos la profesionalidad tecnológica del mundo moderno con la profundidad de la misión católica, creando espacios digitales que invitan al encuentro.
                        </p>
                        <p className="text-lg text-lumen-structure/70 leading-relaxed">
                            Cada proyecto que tomamos es tratado con el mismo respeto y atención al detalle que merece una obra que busca el bien común.
                        </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="pt-8">
                        <div className="h-px w-32 bg-lumen-creative/30" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Purpose;
