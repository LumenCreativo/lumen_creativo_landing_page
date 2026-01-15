"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CtaFinal = () => {
    return (
        <section className="py-24 md:py-32 bg-lumen-structure">
            <div className="container px-6 md:px-8 mx-auto text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Title */}
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumen-clarity leading-tight">
                        ¿Listo para iluminar tu proyecto?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-lumen-clarity/70 max-w-2xl mx-auto leading-relaxed">
                        Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos transformar tu presencia digital.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
                        <Button
                            size="lg"
                            className="h-14 px-10 text-xl rounded-lg bg-lumen-energy hover:scale-105 transform transition-transform text-white"
                        >
                            Agendar Consultoría
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-lg rounded-lg border-2 border-lumen-creative text-lumen-creative hover:bg-lumen-creative/10 transition-colors"
                        >
                            <Mail className="mr-2 w-5 h-5" />
                            Escríbenos
                        </Button>
                    </div>

                    {/* Trust Signal */}
                    <p className="text-sm text-lumen-clarity/50 pt-6">
                        Sin compromisos. Sin presiones. Solo conversación con propósito.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaFinal;
