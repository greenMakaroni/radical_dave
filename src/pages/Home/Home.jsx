import { useEffect, useState } from "react"

import Landing from "../../components/landingCanvas/Landing/Landing"
import LandingText from "../../components/landingText/LandingText"
import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"

import "./home.scss"

const Home = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-body">
      {/* <LandingText />
      <Landing isLoaded={isLoaded} setLoaded={setLoaded} /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home