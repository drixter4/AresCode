import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[#6a4e12] text-xs font-bold mb-6">
            <Sparkles size={14} />
            <span>Innovación Digital de Elite</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-brand-text">
            Transformamos <br />
            <span className="text-gradient">Visiones en Código</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Ares Code desarrolla soluciones digitales de alto nivel. Desde aplicaciones móviles hasta arquitecturas de backend robustas, impulsamos tu crecimiento con tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact">
              <Button size="lg" className="group">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="ghost" size="lg">Ver Portafolio</Button>
            </a>
          </div>
          <div className="mt-12 flex items-center space-x-6 text-sm text-slate-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200" />
              ))}
            </div>
            <span>+100 Proyectos entregados con éxito</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-dark rounded-3xl p-2 shadow-2xl border border-brand-primary/20 overflow-hidden">
            <img src="/assets/hero.webp" alt="Ares Code Branding" width={600} height={600} fetchpriority="high" decoding="async" className="rounded-2xl w-full h-auto opacity-90" />
          </div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-xl flex items-center justify-center p-4 shadow-xl border-brand-primary/30"
          >
            <CodeIcon className="text-brand-primary w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -left-8 glass rounded-full flex items-center justify-center space-x-2 px-6 py-2 border-brand-accent/30"
          >
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-bold text-[#8b6d31]">SISTEMA ACTIVO</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
