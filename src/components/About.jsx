export default function About() {
  return (
    <section id="about" className="scroll-mt-24 max-w-4xl mx-auto px-6 py-12 border-t border-zinc-800/80">
      <div className="max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Background</p>
        <h2 className="text-xl font-bold text-zinc-100 mb-4">About Me</h2>

        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          Before diving into software development, 
          I completed a B.Mus. in Electric Bass at the Conservatorio Licinio Refice. 
          Preparing complex repertoire built my habits around deliberate daily practice, 
          pattern analysis, and staying calm under pressure.
        </p>

        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          I transitioned into software engineering through The Odin Project's 
          full-stack curriculum. Rather than skimming tutorials, 
          I wanted to understand relational schemas, 
          how client and server exchange state securely, 
          and how to debug independently.
        </p>

        <p className="text-sm text-zinc-400 leading-relaxed">
          I am currently looking for an entry-to-mid level developer role in Dublin. 
          My focus is on writing clean, readable code and learning standard testing, 
          CI/CD, and architecture patterns within an experienced engineering team.
        </p>
      </div>
    </section>
  );
}