import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import profilePic from "../../assets/radical_logo_transparent.png";
import "./mobileNav.scss";

const MobileNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      
   <nav className="navigation-menu" style={open ? { animation: "none" } : { animation: "menuAppear-Mobile ease 0.3s" }}>       
          <Link to="/" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/" ? "link active" : "link"} onClick={() => setOpen(!open)} > Home </Link>
          <Link to="/services" style={open ? {animation: "none"} : {animation: "linkFadeIn ease 1s;"}} className={location.pathname === "/services" ? "link active" : "link"} onClick={() => setOpen(!open)} > Services </Link>
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

        { open && <NavigationMenu /> }
    </>

  )
}

export default MobileNav