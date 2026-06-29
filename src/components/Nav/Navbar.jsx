import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre nosotros', href: '#about' },
    { name: 'Proyectos', href: '#portfolio' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-brand-primary/10' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <div className="w-16 h-16 transition-transform group-hover:scale-105">
            <img src="/assets/logo.webp" alt="Ares Code Logo" className="w-full h-full object-contain" />
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm">Contacto</Button>
          </a>
        </div>

        <button className="md:hidden text-brand-text p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-brand-primary/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-bold text-brand-text hover:text-brand-primary transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Contacto</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
