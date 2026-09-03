export default function Hero() {
  return (
    <section className="scroll-mt-24 max-w-4xl mx-auto px-6 pt-20 pb-12">
      <p className="text-xs font-mono uppercase tracking-wider text-sky-400/90 mb-3">
        Dublin, Ireland • Open to Junior & Mid-level engineering roles
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl leading-tight">
        Full-Stack Web Developer. <br />
        <span className="text-zinc-400 font-normal">Working with Ruby on Rails, React & PostgreSQL.</span>
      </h1>

      <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
        Self-taught developer with a background in disciplined music performance. 
        I build decoupled web applications from scratch, 
        currently looking to join an engineering team where I can contribute 
        to production code and grow under senior mentorship.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a href="#projects" className="px-4 py-2 rounded-md text-xs font-semibold bg-sky-500 text-zinc-950 hover:bg-sky-400 transition">
          See Musicloggr ↓
        </a>
        <a href="#contact" className="px-4 py-2 rounded-md text-xs font-semibold border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 bg-zinc-900/50 transition" >
          Get in touch
        </a>
      </div>
    </section>
  );
}