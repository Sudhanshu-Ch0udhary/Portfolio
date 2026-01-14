import { createSignal, For, onMount } from 'solid-js';
import { Code2, ExternalLink } from 'lucide-solid';

const Projects = () => {
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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const projects = [
    {
      id: 1,
      title: 'Custom Programming Language',
      description:
        'Designed and built a complete programming language from scratch with lexer, parser, and interpreter. Features include web playground, VS Code extension, and npm package distribution.',
      tags: ['TypeScript', 'Compiler Design', 'AST', 'Web Playground'],
      link: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Orchestration Engine',
      description:
        'Multi-purpose task orchestration system accepting Natural Language input and intelligently routing to 25+ integrated services using the custom language as tech stack.',
      tags: ['Node.js', 'NLP', 'Microservices', 'Custom Lang'],
      link: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'CLI Data Lister',
      description:
        'Command-line interface tool showcasing real-world usage of the custom programming language. Demonstrates practical application in systems programming.',
      tags: ['CLI', 'Custom Lang', 'Systems'],
      link: '#',
    },
    {
      id: 4,
      title: 'Real-time Chat App',
      description:
        'Full-stack real-time messaging application with WebSocket connections, user authentication, and message persistence.',
      tags: ['MERN', 'Socket.io', 'MongoDB'],
      link: '#',
    },
    {
      id: 5,
      title: 'Chess Review System',
      description:
        'Comprehensive chess game analyzer with move evaluation, performance metrics, and AI-powered suggestions.',
      tags: ['Chess.js', 'React', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <section id="projects" class={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian to-surface/50 ${visible() ? 'section-reveal' : 'opacity-0'}`}>
      <div class="max-w-7xl mx-auto">
        <div class={`mb-16 transition-all duration-700 ${visible() ? 'animate-slide-left' : 'opacity-0'}`}>
          <h2 class="text-6xl md:text-7xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p class="text-slate-400 text-lg">
            From language design to full-stack applications—systems that solve real problems.
          </p>
        </div>

        {/* Improved grid layout */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={projects}>
            {(project, index) => (
              <div
                class={`
                  group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 
                  backdrop-blur-sm border border-slate-700/50 hover:border-ultra-violet/50 
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-ultra-violet/20
                  ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
                  ${visible() ? 'animate-zoom' : 'opacity-0'}
                `}
                style={`animation-delay: ${index() * 0.1}s`}
              >
                {/* Hover gradient overlay */}
                <div class="absolute inset-0 bg-gradient-to-br from-ultra-violet/0 to-ultra-violet/0 group-hover:from-ultra-violet/10 group-hover:to-violet-glow/5 transition-all duration-500"></div>

                <div class="relative p-6 md:p-8 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div class="space-y-4">
                    <div class="flex items-start justify-between">
                      <Code2 size={project.featured ? 32 : 24} class="text-ultra-violet" />
                      <a
                        href={project.link}
                        class="p-2 rounded-lg bg-ultra-violet/10 text-ultra-violet hover:bg-ultra-violet hover:text-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>

                    <h3 class={`font-mono font-bold text-slate-100 group-hover:text-ultra-violet transition-colors ${project.featured ? 'text-2xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>

                    <p class="text-slate-400 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 mt-6">
                    <For each={project.tags}>
                      {(tag) => (
                        <span class="px-3 py-1 text-xs font-mono text-slate-300 bg-slate-700/50 rounded-full border border-slate-600/50 group-hover:border-ultra-violet/50 transition-colors">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Projects;