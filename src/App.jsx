import { motion } from 'framer-motion';
import { ArrowRight, Mail, GitBranch, Link } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Navegación súper limpia */}
      <nav className="w-full p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-heading font-bold text-white tracking-tighter">
          arena<span className="text-brand-purple">santiago</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-brand-muted">
          <a href="#proyectos" className="hover:text-brand-purple transition-colors">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-brand-purple transition-colors">Sobre mí</a>
          <a href="#stack" className="hover:text-brand-purple transition-colors">Stack</a>
        </div>
      </nav>

      {/* Hero Section Modificado */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* 1. Sección de Perfil (Lado a lado en escritorio) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10 mb-12 text-center md:text-left bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            {/* Contenedor de la foto (Más grande y a la izquierda en MD) */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-brand-purple/40 p-1 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <img 
                  src="/foto-hdv.png" 
                  alt="Santiago Arenas" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Contenedor del texto (A la derecha en MD) */}
            <div className="flex flex-col items-center md:items-start max-w-md">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Hola, soy Santiago Arenas.
              </h1>
              <p className="text-brand-muted text-base mb-6 leading-relaxed">
                Construyo soluciones tecnológicas eficientes, accesibles y orientadas a potenciar tanto negocios locales como globales.
              </p>

              {/* Redes Sociales */}
              <div className="flex gap-4">
                <a href="https://github.com/arenasantiago" target="_blank" rel="noreferrer" className="p-2 text-brand-muted hover:text-white hover:bg-brand-purple/20 rounded-full transition-all border border-transparent hover:border-brand-purple/30">
                  <GitBranch size={22} />
                </a>
                <a href="https://www.linkedin.com/in/santiago-arenas-holguin/" target="_blank" rel="noreferrer" className="p-2 text-brand-muted hover:text-white hover:bg-brand-purple/20 rounded-full transition-all border border-transparent hover:border-brand-purple/30">
                  <Link size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. Propuesta de Valor y Call to Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center mt-4"
          >
            <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
              Desarrollador Full Stack
            </h2>
            
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight max-w-3xl">
              Resolviendo problemas complejos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">código limpio.</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a href="#proyectos" className="bg-brand-purple hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                Ver proyectos <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="border border-brand-muted hover:border-brand-purple hover:text-brand-purple text-brand-light px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all bg-white/5 hover:bg-brand-purple/10">
                <Mail size={18} /> Contactar
              </a>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

export default App;