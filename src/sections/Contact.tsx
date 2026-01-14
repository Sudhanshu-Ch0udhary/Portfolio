import { createSignal, onMount } from 'solid-js';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-solid';

const Contact = () => {
  const [visible, setVisible] = createSignal(false);
  const [formData, setFormData] = createSignal({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = createSignal(false);

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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Form submitted:', formData());
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" class={`py-20 px-4 sm:px-6 lg:px-8 bg-obsidian ${visible() ? 'section-reveal' : 'opacity-0'}`}>
      <div class="max-w-5xl mx-auto">
        <div class={`text-center mb-16 transition-all duration-700 ${visible() ? 'animate-slide-bottom' : 'opacity-0'}`}>
          <h2 class="text-6xl md:text-7xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p class="text-slate-400 text-lg">Have an idea? Let's make it happen.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact info + socials */}
          <div class={`space-y-8 transition-all duration-700 delay-200 ${visible() ? 'animate-slide-left' : 'opacity-0'}`}>
            <div class="p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-ultra-violet/50 transition-all">
              <h3 class="text-2xl font-mono font-bold text-ultra-violet mb-6">Get in Touch</h3>
              
              <div class="space-y-4">
                <a
                  href="mailto:sudhanshu@example.com"
                  class="group flex items-center gap-4 p-4 rounded-xl bg-slate-700/20 hover:bg-ultra-violet/10 border border-slate-600/50 hover:border-ultra-violet transition-all"
                >
                  <Mail size={24} class="text-ultra-violet group-hover:scale-110 transition-transform" />
                  <div>
                    <p class="text-xs text-slate-500">Email</p>
                    <p class="text-slate-300">sudhanshu@example.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div class="p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-ultra-violet/50 transition-all">
              <h3 class="text-2xl font-mono font-bold text-ultra-violet mb-6">Connect</h3>
              <div class="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  class="group aspect-square flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-700/20 hover:bg-ultra-violet/10 border border-slate-600/50 hover:border-ultra-violet transition-all hover:scale-110"
                >
                  <Github size={28} class="text-slate-400 group-hover:text-ultra-violet transition-colors" />
                  <span class="text-xs text-slate-500">GitHub</span>
                </a>
                <a
                  href="#"
                  class="group aspect-square flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-700/20 hover:bg-ultra-violet/10 border border-slate-600/50 hover:border-ultra-violet transition-all hover:scale-110"
                >
                  <Linkedin size={28} class="text-slate-400 group-hover:text-ultra-violet transition-colors" />
                  <span class="text-xs text-slate-500">LinkedIn</span>
                </a>
                <a
                  href="#"
                  class="group aspect-square flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-700/20 hover:bg-ultra-violet/10 border border-slate-600/50 hover:border-ultra-violet transition-all hover:scale-110"
                >
                  <Twitter size={28} class="text-slate-400 group-hover:text-ultra-violet transition-colors" />
                  <span class="text-xs text-slate-500">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            class={`p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 space-y-6 transition-all duration-700 delay-300 ${visible() ? 'animate-slide-right' : 'opacity-0'}`}
          >
            <div>
              <label class="block text-sm font-mono text-slate-400 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData().name}
                onInput={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-ultra-violet focus:ring-2 focus:ring-ultra-violet/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label class="block text-sm font-mono text-slate-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData().email}
                onInput={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-ultra-violet focus:ring-2 focus:ring-ultra-violet/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-mono text-slate-400 mb-2">Message</label>
              <textarea
                required
                value={formData().message}
                onInput={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                rows={5}
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-ultra-violet focus:ring-2 focus:ring-ultra-violet/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              class="group w-full px-6 py-4 bg-ultra-violet text-white font-mono font-bold rounded-xl hover:bg-violet-glow hover:shadow-2xl hover:shadow-ultra-violet/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
              disabled={submitted()}
            >
              {submitted() ? (
                <>✓ Sent!</>
              ) : (
                <>
                  Send Message
                  <Send size={18} class="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;