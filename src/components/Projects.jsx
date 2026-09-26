import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Scale, Gem, Atom, Dumbbell, Car } from 'lucide-react';
import { projects } from '../data/projects';

// Mapa de claves de icono -> componente de lucide-react.
const ICONS = {
  scale: Scale,
  gem: Gem,
  atom: Atom,
  dumbbell: Dumbbell,
  car: Car,
};

function ProjectCard({ project, index }) {
  const Icon = ICONS[project.icon] ?? Scale;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:border-brand-purple/40 hover:bg-white/[0.07] transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-heading font-bold text-white leading-tight">
          {project.name}
        </h3>
      </div>

      <p className="text-brand-muted text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-brand-light bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-brand-purple hover:bg-purple-600 px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_22px_rgba(139,92,246,0.45)]"
        >
          <GitBranch size={16} /> Ver en GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium text-brand-light border border-brand-muted/60 hover:border-brand-purple hover:text-brand-purple bg-white/5 hover:bg-brand-purple/10 px-4 py-2 rounded-lg transition-all"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="w-full px-6 py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm md:text-base mb-3">
            Proyectos
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Trabajo seleccionado
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
