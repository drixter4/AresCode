import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CircleCheck, CircleX } from 'lucide-react';
import Button from '../common/Button';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRef.current) {
      setStatus('loading');
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } catch (err) {
        console.error('EmailJS Error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text">
              ¿Listo para <span className="text-gradient">Empezar?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12">
              Estamos aquí para convertir tus ideas en realidades digitales. Contáctanos y descubre cómo podemos ayudarte a escalar tu negocio.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</div>
                  <div className="text-brand-text font-medium">info@arescode.com.mx</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">WhatsApp</div>
                  <div className="text-brand-text font-medium">+52 33 2233 4834</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Ubicación</div>
                  <div className="text-brand-text font-medium">Guadalajara, Jalisco, México</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-8 md:p-12 rounded-3xl border border-brand-primary/10 shadow-2xl relative"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-slate-700 ml-1">Nombre</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Tu nombre" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-slate-700 ml-1">Email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="tu@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700 ml-1">Asunto</label>
                <select id="contact-subject" name="subject" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none">
                  <option className="bg-brand-dark">Desarrollo Web</option>
                  <option className="bg-brand-dark">App Móvil</option>
                  <option className="bg-brand-dark">Consultoría</option>
                  <option className="bg-brand-dark">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 ml-1">Mensaje</label>
                <textarea id="contact-message" name="message" required rows={4} placeholder="¿Cómo podemos ayudarte?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary/50 transition-colors" />
              </div>
              <Button type="submit" className="w-full group" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                {status === 'idle' && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                {status === 'success' && <CircleCheck className="ml-2 w-4 h-4 text-green-400" />}
                {status === 'error' && <CircleX className="ml-2 w-4 h-4 text-red-500" />}
              </Button>
              {status === 'success' && <p className="text-center text-green-400 text-sm animate-pulse">¡Mensaje enviado con éxito!</p>}
              {status === 'error' && <p className="text-center text-red-500 text-sm">Ocurrió un error. Inténtalo de nuevo.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
