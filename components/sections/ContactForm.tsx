"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <section id="contacto" className="py-24 bg-gradient-to-b from-lumen-light to-white">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Left Panel */}
                    <div className="md:w-2/5 bg-lumen-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lumen-main rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl font-bold mb-6">Hablemos de tu Misión</h3>
                            <p className="text-lumen-light/80 leading-relaxed mb-8">
                                Cada gran proyecto comienza con una conversación. Agenda una auditoría gratuita de 30 minutos para analizar tu presencia digital.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div>
                                <span className="block text-xs uppercase text-lumen-main font-bold tracking-wider mb-1">Email</span>
                                <a href="mailto:hola@lumencreativo.com" className="text-xl hover:text-lumen-main transition-colors">hola@lumencreativo.com</a>
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-lumen-main font-bold tracking-wider mb-1">Ubicación</span>
                                <p className="text-lg">Global (Remoto)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="md:w-3/5 p-10 md:p-14">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-lumen-main focus:ring-2 focus:ring-lumen-main/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-lumen-main focus:ring-2 focus:ring-lumen-main/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="org" className="text-sm font-medium text-gray-700">Institución / Organización</label>
                                <input
                                    id="org"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-lumen-main focus:ring-2 focus:ring-lumen-main/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-lumen-main focus:ring-2 focus:ring-lumen-main/20 outline-none transition-all resize-none"
                                />
                            </div>

                            <Button size="lg" className="w-full text-lg h-12 bg-gradient-to-r from-lumen-main to-[#00ACC1] hover:from-[#00ACC1] hover:to-lumen-main text-white shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                Solicitar Auditoría
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
