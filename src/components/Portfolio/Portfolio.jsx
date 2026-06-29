import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'Tu puerta de entrada digital',
      category: 'Landing Page',
      description: 'Diseñada para captar la atención de forma inmediata y convertir visitantes en clientes.',
      image: '/assets/portfolio_gateway.webp'
    },
    {
      title: 'Tienda en línea',
      category: 'E-commerce',
      description: 'Simplifica la experiencia de compra: navegación fluida, productos claros y pagos seguros.',
      image: '/assets/portfolio_store.webp'
    },
    {
      title: 'Plataforma Web',
      category: 'Web App',
      description: 'Versátil, funcional y hecha a la medida. Impulsa tu presencia digital con una plataforma profesional.',
      image: '/assets/portfolio_platform.webp'
    },
    {
      title: 'Web Hosting',
      category: 'Hosting',
      description: 'Alojamiento rápido, seguro y confiable para tu sitio. Rendimiento óptimo y soporte técnico especializado.',
      image: '/assets/portfolio_hosting.webp'
    },
    {
      title: 'Dominio y Mailing',
      category: 'Digital Identity',
      description: 'Identidad digital profesional con dominio propio y correo institucional personalizado.',
      image: '/assets/portfolio_identity.webp'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Soluciones digitales de alto impacto diseñadas para escalar tu negocio con tecnología de vanguardia y diseño premium.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden aspect-video bg-slate-900 border border-white/5 ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img src={project.image} alt={project.title} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 w-full">
                <div className="text-sm font-semibold text-brand-primary mb-2 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <div className="overflow-hidden">
                  <p className="text-slate-300 text-lg max-w-2xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
