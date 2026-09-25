import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-20 animate-pulse delay-75"></div>

      {/* Contenedor Principal Centrado */}
      <motion.div 
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span 
          variants={itemVariants} 
          className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-6"
        >
          Bienvenido a mi portafolio
        </motion.span>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-gray-900 dark:text-white leading-tight mb-6"
        >
          Hola, soy <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
            José De La Cruz
          </span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants} 
          className="text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
        >
          Desarrollador de Software <span className="text-purple-500">&</span> Analista IT
        </motion.h2>
        
        <motion.p 
          variants={itemVariants} 
          className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed"
        >
          Transformo ideas en soluciones digitales innovadoras y me aseguro de que la infraestructura tecnológica que las sostiene sea robusta, segura y eficiente.
        </motion.p>
        
        {/* Botones de Acción Centrados */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <a 
            href="#portafolio" 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Ver mis proyectos
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Hablemos
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}