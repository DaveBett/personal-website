function Card({ title, description, repo, link, tags }) {
  return (
    <div class="flex flex-col gap-5 justify-between shadow-xl/20 rounded-xl p-4 ">
      <div>
        <div class="text-xl font-semibold">{title}</div>
        <div class="text-lg">{description}</div>
      </div>

      <div class="flex flex-col gap-2">
        { link ? <a href={link} target="_blank" rel="noopener noreferrer">Visit</a> : null}
        <a href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
        <ul class="list-none flex gap-4">
        {tags.map((tag) =>
          <li class="text-sm">{tag}</li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Card