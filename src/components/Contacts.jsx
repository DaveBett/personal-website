import { ContactMe } from './ContactMe'

function Contacts() {
  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      <div className="text-3xl font-semibold">Contact Me!</div>

      <ContactMe />


      <div className="text-2xl font-semibold">Links</div>

        <div className="flex gap-3 justify-between">
          <button className="border rounded-lg px-3 py-2 text-white bg-sky-500 hover:bg-sky-700">
            <a href="https://www.linkedin.com/in/davide-betterini-97b1a8210/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </button>

          <button className="border rounded-lg px-3 py-2 text-white bg-sky-500 hover:bg-sky-700">
            <a href="https://www.github.com/DaveBett" target="_blank" rel="noopener noreferrer">GitHub</a>
          </button>
        </div>


    </div>
  )
}

export default Contacts