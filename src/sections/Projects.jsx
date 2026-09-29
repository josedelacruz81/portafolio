import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import imgBussapp1 from '../img/bussap/bussapp1.png';
import imgBussapp2 from '../img/bussap/bussapp2.png';
import imgBussapp3 from '../img/bussap/bussapp3.png';
import imgBussapp4 from '../img/bussap/bussapp4.png';
import imgBussapp5 from '../img/bussap/bussapp5.png';
import imgBussapp6 from '../img/bussap/bussapp6.png';
import imgsionamed1 from '../img/sionamed/sionamed1.png';
import imgsionamed2 from '../img/sionamed/sionamed2.png';
import imgOfiempleo1 from '../img/ofiempleo/ofi.png';


export default function Projects() {
  const [filter, setFilter] = useState('Todos');

  // Categorías para los botones de filtro
  const categories = ['Todos', 'Desarrollo Web', 'Diseño & UI', 'Gestión IT & Social', 'Movil'];

  // Aquí están precargados tus proyectos reales
  const projects = [
    {
      id: 1,
      title: 'SIONAMED Centro Médico Integral',
      category: 'Desarrollo Web',
      description: 'Arquitectura web y diseño de interfaz responsiva para centro médico en Shushufindi. Incluye navegación dinámica y páginas de especialidades médicas.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Diseño UI'],
      image: [imgsionamed1, imgsionamed2],
      link: 'https://cmisionamed.onrender.com/',
      repo: 'https://github.com/josedelacruz81/CMISIONAMED.git'
    },
    {
      id: 2,
      title: 'Bussapp',
      category: 'Movil',
      description: 'Aplicación nativa para Android que permite a los usuarios consultar líneas de transporte, seleccionar rutas específicas y visualizar paradas en tiempo real mediante la integración de la API de Google Maps.',
      tech: ['Java', 'Android Studio', 'UX Mobile', 'Google Maps API'],
      image: [imgBussapp1,imgBussapp2,imgBussapp3, imgBussapp4, imgBussapp5, imgBussapp6],
      link: 'https://github.com/josedelacruz81/Busapp.git',
      repo: 'https://github.com/josedelacruz81/Busapp.git'
    },
    {
      id: 3,
      title: 'Ofiempleo',
      category: 'Desarrollo Web',
      description: 'Estructura web y metodología Design Thinking (Empathy Mapping) para escuela de emprendimiento femenino en Cascales.',
      tech: ['React', 'UI/UX', 'Metodologías Ágiles'],
      image: [imgOfiempleo1],
      link: 'https://ofiempleo.vercel.app/',
      repo: 'https://github.com/josedelacruz81/Ofiempleo.git'
    },
  ];

  // Lógica de filtrado
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portafolio" className="py-20 px-6 lg:px-12 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Portafolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Una selección de mis trabajos en desarrollo de software, diseño de interfaces y proyectos de impacto social.
          </p>
        </motion.div>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' 
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Proyectos Animada */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-xl shadow-gray-200/50 dark:shadow-none group"
              >
                {/* Imagen del Proyecto con efecto Hover */}
                <div className="relative overflow-hidden h-60 md:h-64 bg-gray-100 dark:bg-slate-800 flex justify-center items-center gap-2 p-4">
                  
                  {/* Lógica para mostrar 1 o varias imágenes */}
                  {Array.isArray(project.image) ? (
                    project.image.map((img, i) => (
                      <img 
                        key={i}
                        src={img} 
                        alt={`${project.title} pantalla ${i + 1}`} 
                        className="w-auto h-full object-contain rounded-md shadow-md transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ))
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  {/* Superposición Oscura (Overlay) con Botones */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <div className="flex gap-4">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 border border-slate-600 text-white rounded-full hover:bg-slate-700 transition-colors">
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenido del Proyecto */}
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Etiquetas de Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}