"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const Purpose = () => {
    return (
        <section className="py-24 bg-lumen-light relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-40 mix-blend-multiply" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-lumen-main font-semibold">
                            <Star size={16} fill="currentColor" />
                            <span>The Lumen Way</span>
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumen-dark mb-8 leading-tight">
                            Una Catedral Digital para <br />
                            <span className="text-lumen-main">la Nueva Evangelización</span>
                        </h2>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                            No somos solo una agencia; somos arquitectos digitales que entienden que la **belleza** y el **orden** son caminos hacia la trascendencia.
                        </p>
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed font-light">
                            Unimos la profesionalidad tecnológica del mundo moderno con la profundidad de la misión católica, creando espacios que invitan al encuentro.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Diseño que respira (Sacred Minimalism)",
                                "Tecnología ética y transparente",
                                "Estrategias centradas en la persona"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-lumen-main/10">
                                    <div className="bg-lumen-main/10 p-2 rounded-full text-lumen-main">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-lumen-dark font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 group border-8 border-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-lumen-dark to-[#00ACC1] opacity-90" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548625361-e87dd02ac78a?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />

                        <div className="relative z-10 text-center text-white p-10 max-w-sm border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl">
                            <span className="text-6xl mb-6 block drop-shadow-lg">🏛️</span>
                            <h3 className="font-serif text-3xl font-bold mb-3">Construimos Puentes</h3>
                            <div className="h-0.5 w-16 bg-lumen-energy mx-auto mb-4" />
                            <p className="text-lumen-light font-light">Entre la Fe milenaria y la Cultura Digital contemporánea.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Purpose;
