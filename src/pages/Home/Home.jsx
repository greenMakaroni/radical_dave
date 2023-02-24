import { useEffect } from "react"

import Landing from "../../components/landingCanvas/Landing/Landing"
import LandingText from "../../components/landingText/LandingText"
import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import ScrollButton from "../../components/landingCanvas/Landing/ScrollButton"

import "./home.scss"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-body">
      <LandingText />
      <Landing />
      <ScrollButton />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home