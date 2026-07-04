import Spotlight from "./Components/Spotlight"
import Navber from "./Components/Navbar"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Works from "./pages/Works"

const App = () => {
  return (
    <div>
      <div className="landing">
        <Spotlight />
        <Navber />
        <Hero />
      </div>
      <Works />
      <Contact />
    </div>
  )
}

export default App
