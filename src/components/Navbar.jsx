export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-zinc-100 tracking-tight">
          Davide Betterini
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition">Projects</a>
          <a href="#about" className="hover:text-zinc-100 transition">About</a>
          <a href="#contact" className="hover:text-zinc-100 transition">Contact</a>
          <a
            href="/Davide_Betterini_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-sky-400"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </header>
  );
}