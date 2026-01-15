"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lumen-light">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-hero-glow z-0" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-lumen-main/10 to-transparent rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-lumen-energy/5 to-transparent rounded-full blur-[80px] opacity-60 -translate-x-1/2 translate-y-1/2" />

            <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-lumen-main/20 text-lumen-dark text-sm font-semibold shadow-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-lumen-energy animate-pulse" />
                        Lumen Creativo - Sacred Digital Standards
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-lumen-dark leading-[1.1] tracking-tight">
                        Iluminamos los proyectos <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-lumen-dark to-lumen-main">
                            que transforman el mundo
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Marketing digital de alta gama con esencia católica para instituciones que buscan trascender.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-lumen-main to-[#00ACC1] hover:from-[#00ACC1] hover:to-lumen-main text-white shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 border-0">
                            Iniciar Consultoría Gratuita
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-lumen-dark/10 hover:bg-white hover:text-lumen-main transition-colors bg-white/50 backdrop-blur-sm">
                            Ver Nuestros Servicios
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
