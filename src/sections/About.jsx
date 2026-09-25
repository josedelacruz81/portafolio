import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiTarget } from 'react-icons/fi';
import perfil from '../img/pf.png';
export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="acerca" className="py-20 px-6 lg:px-12 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Columna Izquierda: Imagen y Tarjetas Flotantes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="relative flex justify-center items-center"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl transform -rotate-12 scale-110 dark:from-cyan-400/10 dark:to-purple-500/10"></div>

          <div className="relative w-72 h-[400px] md:w-80 md:h-[450px] bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl border border-gray-300 dark:border-slate-600 shadow-2xl overflow-hidden z-10 group">

            {/* Imagen ocupando el 100% del rectángulo */}
            <img
              src={perfil}
              alt="Alan Pacheco - Desarrollador de Software y Fotógrafo"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Sombreado en la parte inferior para dar profundidad y resaltar si hay texto cerca */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          </div>

          {/* Tarjeta Flotante 1: IT & Soporte */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-10 -left-6 md:-left-12 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 z-20 flex items-center gap-3"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
              <FiTarget size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Enfoque</p>
              <p className="font-bold text-gray-900 dark:text-white text-sm">Resolución de Problemas</p>
            </div>
          </motion.div>

          {/* Tarjeta Flotante 2: Ubicación/Contexto */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -right-6 md:-right-12 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 z-20 flex items-center gap-3"
          >
            <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-lg text-cyan-600 dark:text-cyan-400">
              <FiGlobe size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Base</p>
              <p className="font-bold text-gray-900 dark:text-white text-sm">Ecuador</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Columna Derecha: Texto y Narrativa */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
          }}
          className="space-y-6"
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Más que código, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              creo ecosistemas digitales.
            </span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Soy Jose, un profesional de Ecuador con una visión técnica. Mi carrera se define por entender la tecnología desde sus cimientos: desde la configuración de redes y seguridad de la información, hasta el diseño y programación de aplicaciones web modernas.
          </motion.p>

          <motion.p variants={fadeUpVariant} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            No me limito a escribir líneas de código en React o Node.js; diseño soluciones pensando en la experiencia del usuario, la escalabilidad del sistema y la estabilidad de la infraestructura que lo soporta. Ya sea creando plataformas interactivas o gestionando el soporte IT institucional, mi objetivo es el mismo: <span className="font-semibold text-gray-900 dark:text-white">hacer que la tecnología funcione a favor de las personas.</span>
          </motion.p>

          {/* Viñetas de impacto */}
          <motion.ul variants={fadeUpVariant} className="space-y-4 pt-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-cyan-500"><FiAward size={20} /></span>
              <p className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Desarrollo Web Integral:</strong> Creación de interfaces dinámicas y backends seguros (MERN stack / Firebase).</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-purple-500"><FiAward size={20} /></span>
              <p className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Administración & Soporte IT:</strong> Gestión de redes, mantenimiento de hardware y soporte técnico efectivo.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-cyan-500"><FiAward size={20} /></span>
              <p className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Diseño & Creatividad:</strong> Integración de habilidades de diseño visual e identidad gráfica en cada producto de software.</p>
            </li>
          </motion.ul>

        </motion.div>
      </div>
    </section>
  );
}