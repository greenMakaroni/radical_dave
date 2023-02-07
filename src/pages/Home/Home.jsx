//  navigation
import Navigation from "../../components/navigation/Navigation"
import Landing from "../../components/landingCanvas/Landing"
import "./home.scss"

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="home-body">
        <Landing />
      </div>
    </>

  )
}

export default Home