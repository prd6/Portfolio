import Spotlight from "./Components/Spotlight"
import Navber from "./Components/Navbar"
import Achivements from "./pages/Achivements"
import Constributions from "./pages/Constributions"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import WhoAmI from "./pages/WhoAmI"
import Works from "./pages/Works"

const App = () => {
  return (
    <div>
        <Spotlight/>
        <Navber/>
        <Hero/>
        <WhoAmI/>
        <Works/>
        <Constributions/>
        <Achivements/>
        <Contact/>
    </div>
  )
}

export default App