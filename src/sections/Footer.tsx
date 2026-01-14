import { Code2, Heart } from 'lucide-solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="relative py-16 px-4 bg-gradient-to-t from-surface/80 to-obsidian border-t border-slate-800/50">
      {/* Gradient overlay */}
      <div class="absolute inset-0 bg-gradient-to-t from-ultra-violet/5 to-transparent -z-10"></div>

      <div class="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div class="space-y-4">
            <h3 class="text-2xl font-mono font-bold bg-gradient-to-r from-ultra-violet to-violet-glow bg-clip-text text-transparent">
              Sudhanshu Choudhary
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Building powerful systems and elegant interfaces. From compilers to cloud infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div class="space-y-4">
            <h4 class="text-sm font-mono font-bold text-ultra-violet uppercase tracking-wider">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <a href="#projects" class="text-slate-400 hover:text-ultra-violet transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#stack" class="text-slate-400 hover:text-ultra-violet transition-colors text-sm">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#github" class="text-slate-400 hover:text-ultra-violet transition-colors text-sm">
                  GitHub Activity
                </a>
              </li>
              <li>
                <a href="#contact" class="text-slate-400 hover:text-ultra-violet transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Info */}
          <div class="space-y-4">
            <h4 class="text-sm font-mono font-bold text-ultra-violet uppercase tracking-wider">Built With</h4>
            <div class="flex items-center gap-2 text-sm text-slate-400">
              <Code2 size={16} class="text-ultra-violet" />
              <span>SolidJS + Vite + Tailwind CSS</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-slate-400">
              <Heart size={16} class="text-ultra-violet" />
              <span>Designed & Developed by Me</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div class="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-slate-500 text-sm font-mono">
            © {currentYear} Sudhanshu Choudhary. All rights reserved.
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span>Made with</span>
            <Heart size={12} class="text-ultra-violet fill-ultra-violet animate-pulse" />
            <span>and lots of caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;