function Card({ title, description, repo, link, tags }) {
  return (
    <div className="flex flex-col gap-5 justify-between border border-zinc-500 shadow-xl/20 rounded-xl p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-emerald-600">
      <div>
        <div className="text-lg md:text-lg lg:text-xl font-bold text-emerald-600">{title}</div>
        <div className="text-sm md:text-md lg:text-lg">{description}</div>
      </div>

      <div className="flex flex-col gap-2">
        { link ? <a className="text-emerald-600" href={link} target="_blank" rel="noopener noreferrer">Visit Site</a> : null}
        <a className="text-emerald-500" href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
        <ul className="list-none flex flex-wrap gap-4">
        {tags.map((tag) =>
          <li className="text-sm text-zinc-500">{tag}</li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Card