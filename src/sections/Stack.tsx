import { createSignal, For, onMount } from 'solid-js';

const Stack = () => {
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('stack');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const technologies = [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'SolidJS', icon: '/icons/solidjs.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Express', icon: '/icons/express.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
  ];

  return (
    <section id="stack" class={`py-20 px-4 sm:px-6 lg:px-8 bg-obsidian ${visible() ? 'section-reveal' : 'opacity-0'}`}>
      <div class="max-w-7xl mx-auto">
        <div class={`text-center mb-16 transition-all duration-700 ${visible() ? 'animate-slide-bottom' : 'opacity-0'}`}>
          <h2 class="text-6xl md:text-7xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p class="text-slate-400 text-lg">Tools and technologies I work with daily</p>
        </div>

        {/* Floating icon grid */}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          <For each={technologies}>
            {(tech, index) => (
              <div
                class={`
                  group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 
                  border border-slate-700/50 hover:border-ultra-violet/50 backdrop-blur-sm
                  transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-ultra-violet/30
                  ${visible() ? 'animate-zoom' : 'opacity-0'}
                `}
                style={`animation-delay: ${index() * 0.05}s`}
              >
                {/* Glow effect */}
                <div class="absolute inset-0 bg-gradient-to-br from-ultra-violet/0 to-ultra-violet/0 group-hover:from-ultra-violet/20 group-hover:to-violet-glow/10 rounded-2xl transition-all duration-500"></div>

                {/* Icon */}
                <div class="relative w-16 h-16 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    class="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <span class="relative text-xs font-mono text-slate-400 group-hover:text-ultra-violet transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Stack;