import { useEffect } from "react"
//  navigation
import Landing from "../../components/landingCanvas/Landing"
import "./home.scss"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <div className="home-body">
        <h1 className="mainHeader"> RADICAL DAVE </h1>
        <Landing />
      </div>
    </>

  )
}

export default Home