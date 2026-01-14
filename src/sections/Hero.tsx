import { createSignal, onMount } from 'solid-js';
import { ChevronDown } from 'lucide-solid';

const Hero = () => {
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    setTimeout(() => setVisible(true), 100);
  });

  return (
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-ultra-violet/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-glow/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        class="absolute inset-0 -z-10 opacity-10" 
        style="background-image: radial-gradient(circle, #8000FF 1px, transparent 1px); background-size: 30px 30px;"
      ></div>

      <div class={`text-center space-y-8 transition-all duration-1000 ${visible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div class="space-y-4">
          <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-bold text-slate-100 leading-tight">
            Sudhanshu
            <br />
            <span class="bg-gradient-to-r from-ultra-violet to-violet-glow bg-clip-text text-transparent">
              Choudhary
            </span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Building from <span class="text-ultra-violet font-semibold">compilers</span> to <span class="text-ultra-violet font-semibold">cloud</span>.
            <br />
            Full Stack Engineer specializing in systems design.
          </p>
        </div>

        {/* CTAs */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#projects"
            class="group px-8 py-4 bg-ultra-violet text-white font-mono font-bold rounded-lg hover:bg-violet-glow hover:shadow-2xl hover:shadow-ultra-violet/50 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <span class="group-hover:tracking-wider transition-all">View Projects</span>
          </a>
          <a
            href="#contact"
            class="px-8 py-4 border-2 border-ultra-violet text-ultra-violet font-mono font-bold rounded-lg hover:bg-ultra-violet/10 hover:shadow-xl hover:shadow-ultra-violet/30 transition-all duration-300 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} class="text-ultra-violet" />
      </div>
    </section>
  );
};

export default Hero;