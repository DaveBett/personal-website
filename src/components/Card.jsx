function Card({ title, description, repo, link, tags }) {
  return (
    <div className="flex flex-col gap-5 justify-between shadow-xl/20 rounded-xl p-4 ">
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>

      <div className="flex flex-col gap-2">
        { link ? <a className="text-sky-500" href={link} target="_blank" rel="noopener noreferrer">Visit Site</a> : null}
        <a className="text-sky-500" href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
        <ul className="list-none flex gap-4">
        {tags.map((tag) =>
          <li className="text-sm text-gray-500">{tag}</li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Card