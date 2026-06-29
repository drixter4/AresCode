import { motion } from 'framer-motion';
import { Laptop, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: 'Desarrollo Web',
      description: 'Sitios corporativos, landing pages y e-commerce con performance optimizado y SEO nativo.',
      icon: Laptop,
      color: 'from-brand-accent to-brand-primary'
    },
    {
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma (iOS & Android) con interfaces intuitivas y fluidas.',
      icon: Smartphone,
      color: 'from-brand-accent to-brand-primary'
    },
    {
      title: 'Backend & APIs',
      description: 'Infraestructuras escalables, integración de APIs y bases de datos robustas para soportes masivos.',
      icon: Database,
      color: 'from-brand-accent to-brand-primary'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-brand-text"
          >
            Nuestros <span className="text-gradient">Servicios Core</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-700 max-w-2xl mx-auto"
          >
            Especialistas en transformar la complejidad técnica en experiencias de usuario premium.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 gap-6"
          >
            {servicesList.map((service) => (
              <div key={service.title} className="glass-dark p-6 rounded-2xl flex items-start space-x-6 hover:border-brand-primary/30 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br shadow-lg shadow-brand-primary/20 ${service.color}`}>
                  <service.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-dark rounded-3xl p-2 border border-brand-primary/20"
          >
            <img src="/assets/services.webp" alt="Services Illustration" width={600} height={600} loading="lazy" decoding="async" className="rounded-2xl w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
