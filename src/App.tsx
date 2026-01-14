import { createSignal, onMount, Show } from 'solid-js';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import GitHubActivity from './sections/GitHubActivity';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    setTimeout(() => setLoading(false), 1200);
  });

  return (
    <Show
      when={!loading()}
      fallback={
        <div class="fixed inset-0 bg-obsidian flex items-center justify-center">
          <div class="text-center space-y-4">
            <div class="w-16 h-16 border-4 border-ultra-violet border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p class="text-ultra-violet font-mono text-sm">Loading Portfolio...</p>
          </div>
        </div>
      }
    >
      <div class="bg-obsidian text-slate-100 overflow-hidden page-load">
        <Hero />
        <Projects />
        <Stack />
        <GitHubActivity />
        <Contact />
        <Footer />
      </div>
    </Show>
  );
}

export default App;