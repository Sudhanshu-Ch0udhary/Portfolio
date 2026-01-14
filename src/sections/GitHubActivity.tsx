import { createSignal, For, onMount } from 'solid-js';
import { GitBranch, GitCommit, Star } from 'lucide-solid';

const GitHubActivity = () => {
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

    const section = document.getElementById('github');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  // Mock commit heatmap data (7 rows x 52 weeks)
  const generateHeatmap = () => {
    return Array.from({ length: 7 }, () =>
      Array.from({ length: 52 }, () => Math.floor(Math.random() * 5))
    );
  };

  const heatmap = generateHeatmap();

  const getIntensity = (value: number) => {
    if (value === 0) return 'bg-slate-800/50';
    if (value === 1) return 'bg-ultra-violet/20';
    if (value === 2) return 'bg-ultra-violet/40';
    if (value === 3) return 'bg-ultra-violet/60';
    return 'bg-ultra-violet';
  };

  return (
    <section id="github" class={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/50 to-obsidian ${visible() ? 'section-reveal' : 'opacity-0'}`}>
      <div class="max-w-7xl mx-auto">
        <div class={`mb-16 transition-all duration-700 ${visible() ? 'animate-slide-right' : 'opacity-0'}`}>
          <h2 class="text-6xl md:text-7xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p class="text-slate-400 text-lg">Consistent contribution to open source and personal projects</p>
        </div>

        <div class="space-y-12">
          {/* Stats */}
          <div class={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible() ? 'animate-slide-bottom' : 'opacity-0'}`}>
            <div class="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-ultra-violet/50 transition-all hover:scale-105">
              <div class="flex items-center gap-3 mb-3">
                <GitCommit size={24} class="text-ultra-violet" />
                <span class="text-2xl font-mono font-bold text-slate-100">523+</span>
              </div>
              <p class="text-slate-400 text-sm">Total Commits</p>
            </div>

            <div class="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-ultra-violet/50 transition-all hover:scale-105">
              <div class="flex items-center gap-3 mb-3">
                <GitBranch size={24} class="text-ultra-violet" />
                <span class="text-2xl font-mono font-bold text-slate-100">12</span>
              </div>
              <p class="text-slate-400 text-sm">Active Repositories</p>
            </div>

            <div class="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-ultra-violet/50 transition-all hover:scale-105">
              <div class="flex items-center gap-3 mb-3">
                <Star size={24} class="text-ultra-violet" />
                <span class="text-2xl font-mono font-bold text-slate-100">89+</span>
              </div>
              <p class="text-slate-400 text-sm">Stars Earned</p>
            </div>
          </div>

          {/* Contribution heatmap */}
          <div class={`p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 overflow-x-auto transition-all duration-700 delay-300 ${visible() ? 'animate-zoom' : 'opacity-0'}`}>
            <h3 class="text-xl font-mono font-bold text-slate-100 mb-6">Contribution Graph</h3>
            <div class="flex gap-1">
              <For each={heatmap[0]}>
                {(_, weekIndex) => (
                  <div class="flex flex-col gap-1">
                    <For each={heatmap}>
                      {(week) => (
                        <div
                          class={`w-3 h-3 rounded-sm ${getIntensity(week[weekIndex()])} hover:ring-2 hover:ring-ultra-violet transition-all cursor-pointer`}
                          title={`${week[weekIndex()]} contributions`}
                        ></div>
                      )}
                    </For>
                  </div>
                )}
              </For>
            </div>
            <div class="flex items-center gap-4 mt-6 text-xs text-slate-400">
              <span>Less</span>
              <div class="flex gap-1">
                <div class="w-3 h-3 rounded-sm bg-slate-800/50"></div>
                <div class="w-3 h-3 rounded-sm bg-ultra-violet/20"></div>
                <div class="w-3 h-3 rounded-sm bg-ultra-violet/40"></div>
                <div class="w-3 h-3 rounded-sm bg-ultra-violet/60"></div>
                <div class="w-3 h-3 rounded-sm bg-ultra-violet"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;