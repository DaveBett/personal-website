import photo from "../assets/photo.jpg"

function Summary() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-12 sm:py-4">
        <img className="mx-auto block h-32 aspect-square rounded-full sm:mx-0 sm:shrink-0 shadow-xl/20" src={photo} alt="Davide Betterini" />

        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-4xl font-semibold">Davide Betterini</p>
            <p className="text-lg font-medium text-gray-500">Web Developer</p>
            <p className="text-base font-medium text-sky-500">Ruby On Rails - JavaScript - React - CSS <br/> Bootstrap - TailwindCSS - Git - PostgreSQL</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Summary