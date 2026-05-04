function Card({ title, description, repo, link, tags }) {
  return (
    <div className="flex flex-col gap-5 justify-between shadow-xl/20 rounded-xl p-4 ">
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>

      <div className="flex flex-col gap-2">
        { link ? <a href={link} target="_blank" rel="noopener noreferrer">Visit</a> : null}
        <a href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
        <ul className="list-none flex gap-4">
        {tags.map((tag) =>
          <li className="text-sm">{tag}</li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Card