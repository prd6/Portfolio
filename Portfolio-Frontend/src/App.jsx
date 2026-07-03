import Spotlight from "./Components/Spotlight"
import Navber from "./Components/Navbar"
import Achivements from "./pages/Achivements"
import Constributions from "./pages/Constributions"
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
      <Constributions />
      <Achivements />
      <Contact />
    </div>
  )
}

export default App