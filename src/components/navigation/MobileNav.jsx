import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import profilePic from "../../assets/pp.jpg"
import "./mobileNav.scss";

const MobileNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      
   <nav className="navigation-menu" style={open ? { animation: "none" } : { animation: "menuAppear-Mobile ease 0.3s" }}>       
          <Link to="/" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/" ? "link active" : "link"} onClick={() => setOpen(!open)} > Home </Link>
          <Link to="/about" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/about" ? "link active" : "link"} onClick={() => setOpen(!open)} > About </Link>
          <Link to="/portfolio" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/portfolio" ? "link active" : "link"} onClick={() => setOpen(!open)} > Portfolio </Link>
          <Link to="/contact" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/contact" ? "link active" : "link"} onClick={() => setOpen(!open)} > Contact </Link>
      </nav>
    )
  }

  const paragraphClickHandle = () => {
    setOpen(!open);
    navigate("/")
  }

  return (
    <>
        <div className={ "div-hamburger" } onClick={() => setOpen(!open)}>
            <div className={ open ? "top-close" : "hamburger-top" }></div>
            <div className={ open ? "middle-close" : "hamburger-middle" }></div>
            <div className={ open ? "bottom-close" : "hamburger-bottom" }></div>
        </div>

        { open && 
        <div className="mobile-logo">
          <img src={profilePic} className="mobile-pp" alt="Profile pictrue" onClick={() => navigate("/")} />
          <div className="mobile-logoText">
            <p className="mobile-name" onClick={() => { paragraphClickHandle()}}> Batuhan Ozgur Basal </p>
            <p className="mobile-title"> Master of Science in Robotics & Intelligent Systems </p>
          </div>
        </div>
        }

        { open && <NavigationMenu /> }
    </>

  )
}

export default MobileNav