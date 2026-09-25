import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Esto pondrá el año actual (2026)

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Marca personal y ubicación */}
        <div className="text-center md:text-left">
          <a href="#inicio" className="text-xl font-bold font-sans tracking-tighter block mb-1">
            <span className="text-gray-900 dark:text-white">&lt;Alan</span>
            <span className="text-cyan-500">Pacheco /&gt;</span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Diseñado y desarrollado con pasión en Shushufindi, Ecuador 🇪🇨
          </p>
        </div>

        {/* Derechos y Redes Sociales */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex space-x-4">
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/tu-usuario" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="mailto:tu-correo@email.com" 
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Correo"
            >
              <FiMail size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Jose De La Cruz. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}