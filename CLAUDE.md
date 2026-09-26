# CLAUDE.md — Portafolio de Santiago Arenas

Memoria del proyecto: contexto para Claude y otros asistentes de código. Léela antes de proponer o hacer cambios, y actualízala cuando cambien el stack, la estructura o los pendientes.

_Última actualización: 2026-09-25 (generada a partir del código)._

## Qué es

Portafolio personal tipo freelancer de Santiago Arenas, Desarrollador Full Stack, para mostrar sus proyectos y conocimientos. Es una sola página (sin router) y toda la interfaz está en español.

- **Repo:** https://github.com/arenasantiago/mi-portafolio (rama `main`). La carpeta local se llama `arenasantiago-portafolio`.
- **Perfiles enlazados en el hero:** GitHub `arenasantiago`, LinkedIn `santiago-arenas-holguin`.
- **Despliegue:** aún no hay configuración de despliegue en el repo.

## Stack

- React 19 en JavaScript (JSX), sin TypeScript
- Vite 8 con `@vitejs/plugin-react`
- Tailwind CSS v4 con el plugin `@tailwindcss/vite` (no hay `postcss.config`)
- Framer Motion 12 (animaciones) y lucide-react 1.x (íconos)
- ESLint 10 con configuración flat: reglas recomendadas + react-hooks + react-refresh; ignora `dist/`

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # servir el build localmente
npm run lint      # ESLint
```

No hay tests configurados.

## Estructura

```
index.html               entrada HTML; monta #root y carga src/main.jsx
public/
  foto-hdv.png           foto de perfil del hero
  favicon.svg
src/
  main.jsx               createRoot + StrictMode; importa index.css
  App.jsx                nav + hero (tarjeta de perfil, propuesta de valor, CTAs) + <Projects />
  index.css              Tailwind v4: @import, @config y @theme con los tokens de marca
  components/
    Projects.jsx         sección #proyectos: grilla de ProjectCard
  data/
    projects.js          inventario de proyectos que alimenta la grilla
tailwind.config.js       colores y fuentes de marca (se carga desde index.css con @config)
eslint.config.js
vite.config.js
```

## Sistema de diseño

Tema oscuro "nórdico" con acento morado. Tokens `brand-*`:

| Token | Valor | Uso |
|---|---|---|
| `brand-dark` | `#0A0A0A` | fondo |
| `brand-purple` | `#8B5CF6` | acento, color del logo |
| `brand-light` | `#E2E8F0` | texto principal |
| `brand-muted` | `#94A3B8` | texto secundario |

- **Tipografía:** `font-sans` = Inter (texto), `font-heading` = Montserrat (títulos).
- **Tarjetas:** `bg-white/5 border border-white/10 rounded-2xl shadow-lg`; en hover, `border-brand-purple/40`.
- **Botón primario:** `bg-brand-purple hover:bg-purple-600` con brillo morado (`shadow-[0_0_15px_rgba(139,92,246,0.3)]`).
- **Chips de tecnología:** `bg-brand-purple/10 border border-brand-purple/20 rounded-full text-xs`.
- **Ancho:** `max-w-6xl mx-auto` en nav y secciones; el hero usa `max-w-4xl`.
- **Logo en texto:** `arena` en blanco + `santiago` en `text-brand-purple`.
- **Animaciones (Framer Motion):** entrada suave de opacidad 0 a 1 con `y: 20` o `scale: 0.95`. En el hero se usa `animate`; en secciones más abajo, `whileInView` con `viewport={{ once: true }}` y retraso escalonado (`index * 0.08`).

## Convenciones

- Componentes funcionales, uno por archivo en `src/components/`, con `export default`.
- Los datos van en `src/data/`, no quemados en los componentes.
- Usar los tokens `brand-*` en lugar de colores sueltos.
- Enlaces externos con `target="_blank" rel="noreferrer"`.
- Navegación por anclas (`id` en la sección + `href="#..."`); las secciones con ancla llevan `scroll-mt-20`, como `#proyectos`.
- GitHub y LinkedIn usan íconos genéricos de lucide (`GitBranch` y `Link`).

## Cómo agregar un proyecto

Añadir un objeto a `src/data/projects.js`:

```js
{
  id: 'slug-unico',
  name: 'Nombre visible',
  description: 'Una o dos frases en español.',
  tech: ['React', 'TypeScript'],
  icon: 'atom',        // clave del objeto ICONS en Projects.jsx
  repo: 'https://github.com/arenasantiago/...',
  demo: 'https://...', // null si no hay despliegue público
}
```

- Claves de ícono disponibles: `scale`, `gem`, `atom`, `dumbbell`, `car`. Si la clave no existe, se muestra `Scale`.
- Para un ícono nuevo: importarlo de `lucide-react` en `Projects.jsx` y agregarlo a `ICONS`.
- Proyectos actuales (verificados contra los repos de github.com/arenasantiago): Truth Tribunal, Joyería Rous, Simulador de Conservación de Energía, GymStatus y Parqueadero de Vehículos.

## Estado actual

**Hecho:** navegación, hero con perfil y CTAs, sección de proyectos.

**Pendiente o por revisar:**
- `#sobre-mi` y `#stack` (nav) y `#contacto` (botón "Contactar") apuntan a secciones que todavía no existen.
- `index.html` sigue con `lang="en"`, título `arenasantiago-portafolio` y sin meta description.
- Inter y Montserrat no se cargan en ningún lado; hoy dependen de que estén instaladas en el equipo de quien visita.
- Archivos sin uso: `src/App.css`, `src/assets/` (hero.png, react.svg, vite.svg) y `public/icons.svg`.
- Los tokens están duplicados en `tailwind.config.js` y en el `@theme` de `index.css`; `autoprefixer` y `postcss` están instalados pero no se usan.
