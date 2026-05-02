import photo from "../assets/photo.jpg"

function Summary() {
  return (
    <div class="flex justify-center">
      <div class="w-1/2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-12 sm:py-4">
        <img class="mx-auto block h-42 rounded-full sm:mx-0 sm:shrink-0" src={photo} alt="Davide Betterini" />

        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-4xl font-semibold">Davide Betterini</p>
            <p class="text-lg font-medium text-gray-500">Web Developer</p>
            <p class="text-base font-medium">Ruby On Rails - JavaScript - React</p>
            <p class="text-base font-medium">CSS - Bootstrap - TailwindCSS - Git</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Summary