import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Proces from "./Components/Proces"
import Services from "./Components/Services"
import Studies from "./Components/Studies"

const App = () => {
  return (
   <>
   <Navbar />
   <Hero/>
   <Services/>
   <Studies />
   <Proces />
   <Contact />
   </>
  )
}

export default App