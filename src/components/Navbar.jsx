import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  // Detectar el scroll para cambiar el estilo del Navbar (Efecto Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces de navegación
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Acerca de', href: '#acerca' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo / Marca Personal */}
        <a href="#inicio" className="text-2xl font-bold font-sans tracking-tighter">
          <span className="text-gray-900 dark:text-white">&lt;Jose</span>
          <span className="text-cyan-500">De La Cruz /&gt;</span>
        </a>

        {/* Enlaces de Escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botón de Modo Oscuro (Escritorio) */}
          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            aria-label="Alternar modo oscuro"
          >
            {colorTheme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Botón de Menú Móvil */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {colorTheme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Animado con Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}