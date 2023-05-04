import Nav from "../Components/Nav/Nav"
import Contact from "../Components/Contact/Contact"

const Contacts = () => {
  return (
    <div>
        <div className="bg-white fixed w-full top-0 z-50">
            <Nav />
        </div>

        <div className="mx-auto max-w-4xl xl:max-w-6xl xl:px-0 mt-32 mb-24">
            <Contact />
        </div>
    </div>
  )
}

export default Contacts