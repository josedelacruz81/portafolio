import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    // La clase de transición hace que el cambio de claro a oscuro sea suave
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;