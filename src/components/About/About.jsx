import { motion } from 'framer-motion';
import { Users, Rocket, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text">
              Impulsamos el <span className="text-gradient">Futuro Digital</span> desde el Corazón de la Tecnología.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              En Ares Code, no solo escribimos código; construimos los cimientos de la transformación digital. Somos un equipo de ingenieros y diseñadores apasionados por la excelencia técnica y la innovación constante.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nuestro enfoque se basa en la transparencia, la calidad del código y una comprensión profunda de los objetivos de negocio de nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              className="glass-dark p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-500 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-brand-text mb-1">60%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Crecimiento de Clientes</div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="glass-dark p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-cyan-500 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-brand-text mb-1">+15</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Países Impactados</div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="glass-dark p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-500 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-brand-text mb-1">100%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Enfoque en Calidad</div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              className="glass-dark p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-500 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-brand-text mb-1">+50</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Premios de Diseño</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
