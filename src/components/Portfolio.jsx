import { PortfolioApps } from '../PortfolioApps'
import Card from './Card'

function Portfolio() {

  const apps = PortfolioApps;

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-3xl font-semibold">Portfolio</div>
        <div className="flex flex-wrap grow-2 justify-center content-stretch md:grid md:grid-cols-3 gap-10 mt-8 mx-8">
          {apps?.map((app) => (
            <Card 
            key={app.id} 
            title={app.title}
            description={app.description}
            link={app.link}
            repo={app.repo}
            tags={app.tags} />
          ))}
        </div>
    </div>
  )
}

export default Portfolio