import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-brand-darker pt-24 pb-12 border-t border-brand-primary/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Logo & Info */}
                    <div className="flex flex-col space-y-6">
                        <a href="#" className="flex items-center">
                            <div className="w-16 h-16 transition-transform hover:scale-105">
                                <img src="/assets/logo.webp" alt="Ares Code Logo" className="w-full h-full object-contain" />
                            </div>
                        </a>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Creamos experiencias digitales que impulsan el crecimiento and transforman industrias a través de la innovación tecnológica.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/people/Ares-code/61579426324978/?mibextid=wwXIfr&rdid=JSvH1EiS1idRhjxr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ck88eDLeX%2F%3Fmibextid%3DwwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary transition-colors"
                                aria-label="Facebook Ares Code"
                            >
                                <FacebookIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/arescode_dev?igsh=NXIyZTUwNzBzczVr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary transition-colors"
                                aria-label="Instagram Ares Code"
                            >
                                <InstagramIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-brand-text font-bold mb-6 text-base tracking-wider uppercase">Servicios</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li>
                                <a href="#services" className="hover:text-brand-primary transition-colors">
                                    Desarrollo Web
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-brand-primary transition-colors">
                                    Apps Móviles
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-brand-primary transition-colors">
                                    UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-brand-primary transition-colors">
                                    Consultoría IT
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-brand-text font-bold mb-6 text-base tracking-wider uppercase">Compañía</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li>
                                <a href="#about" className="hover:text-brand-primary transition-colors">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:text-brand-primary transition-colors">
                                    Portafolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-brand-primary transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact details */}
                    <div>
                        <h3 className="text-brand-text font-bold mb-6 text-base tracking-wider uppercase">Contacto</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start space-x-3">
                                <MapPin size={16} className="text-brand-primary mt-0.5 shrink-0" />
                                <span>Guadalajara, Jalisco, México</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={16} className="text-brand-primary shrink-0" />
                                <a href="https://wa.me/523322334834" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                                    +52 33 2233 4834
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={16} className="text-brand-primary shrink-0" />
                                <a href="mailto:info@arescode.com.mx" className="hover:text-brand-primary transition-colors">
                                    info@arescode.com.mx
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} Ares Code. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-primary transition-colors">
                            Aviso de Privacidad
                        </a>
                        <a href="#" className="hover:text-brand-primary transition-colors">
                            Términos de Servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
