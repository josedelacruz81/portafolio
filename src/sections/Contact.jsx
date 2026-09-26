import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí integrarías la lógica de Firebase Firestore o EmailJS
    // Ejemplo simulado:
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      
      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 px-6 lg:px-12 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trabajemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Juntos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente, necesitas infraestructura IT o buscas un desarrollador freelance? Envíame un mensaje y hablemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Columna Izquierda: Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-xl shadow-cyan-500/5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-xl text-cyan-600 dark:text-cyan-400 mt-1">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:josepastordelacruz81@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-cyan-500 transition-colors">
                      josepastordelacruz81@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-400 mt-1">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ubicación</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Shushufindi, Sucumbíos, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-xl text-cyan-600 dark:text-cyan-400 mt-1">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono / WhatsApp</p>
                    <a href="tel:+593983648704" className="text-gray-900 dark:text-white font-medium hover:text-cyan-500 transition-colors">
                      +593 98 364 8704
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-2xl shadow-purple-500/5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tu Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tu Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                  placeholder="Háblame de tu proyecto, requerimiento IT o propuesta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Enviando mensaje...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <FiSend />
                  </>
                )}
              </button>

              {/* Mensaje de Éxito */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center font-medium border border-green-200 dark:border-green-800"
                >
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}