"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-lumen-vision overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-lumen-vision to-lumen-vision/90" />

            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #F5F5F5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container relative z-10 px-6 md:px-8 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="font-display text-lg tracking-[0.3em] text-lumen-clarity/70 uppercase">
                            Lumen Creativo
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-lumen-clarity tracking-wide leading-tight">
                        Iluminamos los proyectos <br className="hidden md:block" />
                        que transforman el mundo
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-lumen-clarity/80 max-w-3xl mx-auto leading-relaxed font-light">
                        Marketing digital de alta gama con esencia católica para instituciones, congregaciones y causas con propósito.
                    </p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-lg bg-lumen-energy hover:bg-lumen-energy/90 text-white shadow-xl transition-all duration-400"
                        >
                            Iniciar Consultoría Gratuita
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-lg rounded-lg border-2 border-lumen-clarity text-lumen-clarity hover:bg-lumen-clarity/10 transition-all duration-400"
                        >
                            Ver Nuestros Servicios
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-lumen-clarity/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-lumen-clarity/70 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
