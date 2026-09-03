import musicloggr from "../assets/musicloggr_dashboard.png";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 max-w-4xl mx-auto px-6 py-14 border-t border-zinc-800/80">
      <div className="mb-8">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Core Project</p>
        <h2 className="text-xl font-bold text-zinc-100 mt-1">What I've been building</h2>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-7 hover:border-zinc-700 transition">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <img
              src={musicloggr}
              alt="Musicloggr application preview"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono text-sky-400">Full-Stack Application</span>
            <h3 className="text-xl font-bold text-zinc-100 mt-1">Musicloggr</h3>
            
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
              A social tracking platform for music lovers. Built to practice architecting a headless Rails backend communicating with a standalone React client, handling external API rate limits, and implementing token authentication.
            </p>

            <div className="flex flex-wrap gap-2 items-start">
              {["Ruby on Rails", "React", "PostgreSQL", "JWT", "MusicBrainz API"].map((tech) => (
                <p
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-sky-950/30 text-sky-300 border border-sky-800/40"
                >
                  {tech}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://musicloggr.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-sky-500 text-zinc-950 hover:bg-sky-400 transition"
              >
                Live Demo ↗
              </a>
              <a
                href="https://github.com/DaveBett/music_log"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-zinc-300 hover:text-sky-400 transition"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg border border-zinc-800/60 bg-zinc-900/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-zinc-400">
        <div>
          <span className="font-semibold text-zinc-200">Other foundational projects:</span> Shopping cart state management, Active Record queries in Flight Booker, and frontend mini-apps.
        </div>
        <a
          href="https://github.com/DaveBett"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-300 hover:underline shrink-0"
        >
          View on GitHub ↗
        </a>
      </div>
    </section>
  );
}