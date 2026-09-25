import { motion } from 'framer-motion'; 
import { 
  SiJavascript, SiReact, SiNodedotjs, SiFirebase, 
  SiTailwindcss, SiGit, SiTypescript, SiCplusplus, SiPython, SiFigma 
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa'; 
import { TbBrandCSharp } from 'react-icons/tb';
import { FiServer, FiShield, FiMonitor, FiCpu } from 'react-icons/fi';

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

const devSkills = [
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'C#', icon: <TbBrandCSharp className="text-[#239120]" /> },
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'UX / Diseño', icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'HTML5 & CSS3', icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div> },
    { name: 'Git & VS Code', icon: <SiGit className="text-[#F05032]" /> },
  ];

  const itSkills = [
    { name: 'Redes LAN/WAN', icon: <FiServer className="text-purple-500" /> },
    { name: 'Routers & Switches', icon: <FiCpu className="text-purple-500" /> },
    { name: 'Firewalls & Seguridad', icon: <FiShield className="text-cyan-500" /> },
    { name: 'Soporte Técnico IT', icon: <FiMonitor className="text-cyan-500" /> },
  ];

  return (
    <section id="habilidades" className="py-20 px-6 lg:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Habilidades</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Combinando la creación de software moderno con una sólida base en infraestructura y redes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: Desarrollo de Software */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-2xl mr-4">
                💻
              </span>
              Desarrollo Web & Software
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full shadow-sm text-gray-700 dark:text-gray-300 font-medium hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tarjeta 2: Infraestructura IT */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-2xl mr-4">
                ⚙️
              </span>
              Análisis IT & Soporte
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {itSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                >
                  <div className="mt-1 text-xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}