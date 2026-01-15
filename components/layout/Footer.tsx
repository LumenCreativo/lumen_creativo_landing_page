import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-lumen-structure text-lumen-clarity pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-display text-xl tracking-wider text-lumen-clarity mb-4">
                            Lumen Creativo
                        </h3>
                        <p className="text-sm text-lumen-clarity/60 mb-6 leading-relaxed">
                            Iluminamos proyectos que transforman el mundo con tecnología y propósito.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-lumen-clarity/50 hover:text-lumen-energy transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-lumen-clarity/50 hover:text-lumen-energy transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-lumen-clarity/50 hover:text-lumen-energy transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-lumen-clarity/50 hover:text-lumen-energy transition-colors">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-lumen-clarity mb-4 text-sm uppercase tracking-wider">Explorar</h4>
                        <ul className="space-y-3 text-sm text-lumen-clarity/60">
                            <li><Link href="#servicios" className="hover:text-lumen-energy transition-colors">Servicios</Link></li>
                            <li><Link href="#filosofia" className="hover:text-lumen-energy transition-colors">Filosofía</Link></li>
                            <li><Link href="#contacto" className="hover:text-lumen-energy transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-lumen-clarity mb-4 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm text-lumen-clarity/60">
                            <li><Link href="/privacidad" className="hover:text-lumen-energy transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-lumen-energy transition-colors">Términos de Servicio</Link></li>
                        </ul>
                    </div>

                    {/* Quote */}
                    <div>
                        <div className="border-l-2 border-lumen-creative pl-4 py-2">
                            <p className="text-sm italic text-lumen-clarity/70 leading-relaxed">
                                "La luz brilla en las tinieblas, y las tinieblas no la vencieron."
                            </p>
                            <p className="text-xs text-lumen-energy mt-2 font-medium">— Juan 1:5</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-lumen-clarity/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-lumen-clarity/40">
                    <p>&copy; {new Date().getFullYear()} Lumen Creativo. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado con ♥ y Fe.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
