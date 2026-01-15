"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Servicios", href: "#servicios" },
        { name: "Filosofía", href: "#filosofia" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
                scrolled
                    ? "bg-lumen-clarity/95 backdrop-blur-md border-b border-lumen-structure/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <span className={cn(
                        "font-display text-xl tracking-wider transition-colors",
                        scrolled ? "text-lumen-structure" : "text-lumen-clarity"
                    )}>
                        Lumen Creativo
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled
                                    ? "text-lumen-structure/70 hover:text-lumen-creative"
                                    : "text-lumen-clarity/80 hover:text-lumen-clarity"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant="default"
                        size="sm"
                        className={cn(
                            "font-medium rounded-lg transition-all",
                            scrolled
                                ? "bg-lumen-vision text-lumen-clarity hover:bg-lumen-vision/90"
                                : "bg-lumen-energy text-white hover:bg-lumen-energy/90"
                        )}
                    >
                        Agendar Auditoría
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        scrolled ? "text-lumen-structure" : "text-lumen-clarity"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-lumen-clarity border-b border-lumen-structure/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-lumen-structure hover:text-lumen-creative transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-2 bg-lumen-vision text-lumen-clarity">
                                Agendar Auditoría
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
