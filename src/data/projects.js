// Inventario de proyectos del portafolio.
// Datos verificados a partir de los repositorios reales en github.com/arenasantiago.
// `icon` es una clave que Projects.jsx traduce a un icono de lucide-react.
// `demo` es null cuando el proyecto no expone un despliegue público documentado.

export const projects = [
  {
    id: 'truth-tribunal',
    name: 'Truth Tribunal',
    description:
      'Tribunal multijugador en tiempo real para auditar afirmaciones de IA, pitches y contenido viral: un jurado vota en vivo y el sistema investiga la web para emitir un veredicto basado en citas verificables.',
    tech: ['React', 'TypeScript', 'Convex', 'Tailwind CSS'],
    icon: 'scale',
    repo: 'https://github.com/arenasantiago/burningtoken',
    demo: 'https://brave-lemur-868.convex.site',
  },
  {
    id: 'joyeria-rous',
    name: 'Joyería Rous',
    description:
      'Tienda online responsive para una joyería de plata 925 y 950: catálogo con filtros, carrito persistente, checkout y panel de administración de productos e inventario.',
    tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
    icon: 'gem',
    repo: 'https://github.com/arenasantiago/joyeria-rouss',
    demo: 'https://joyeria-rouss.vercel.app',
  },
  {
    id: 'fisica-simulador',
    name: 'Simulador de Conservación de Energía',
    description:
      'Simulador educativo interactivo que visualiza la conservación de la energía mecánica, con animación en tiempo real, gráficos D3.js y validación automática de resultados.',
    tech: ['React', 'TypeScript', 'D3.js'],
    icon: 'atom',
    repo: 'https://github.com/arenasantiago/fisica-simulador',
    demo: 'https://fisica-simulador.vercel.app',
  },
  {
    id: 'gymstatus',
    name: 'GymStatus',
    description:
      'Aplicación móvil que calcula el IMC y el ICC de una persona, con frontend en React Native (Expo) y un backend propio en Node.js sobre MongoDB.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    icon: 'dumbbell',
    repo: 'https://github.com/arenasantiago/gymstatus',
    demo: null,
  },
  {
    id: 'parqueadero-vehiculos',
    name: 'Parqueadero de Vehículos',
    description:
      'API REST para la gestión de un parqueadero: CRUD de motos y carros, cálculo de tarifas por tiempo de permanencia y servicios adicionales, con persistencia en MySQL.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    icon: 'car',
    repo: 'https://github.com/arenasantiago/parqueaderovehiculos',
    demo: null,
  },
];
