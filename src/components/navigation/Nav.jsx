import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profilePic from "../../assets/pp.jpg";
import useScrollPosition from "../../useScrollPosition"; 
import useWindowDimensions from '../../useWindowDimensions'

import "./nav.scss";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [height, width]);

  useEffect(() => {
    if (scrollPosition.prev < scrollPosition.current) {
      setShow(false);
      } else {
        setShow(true);
      }
  }, [scrollPosition.prev])

  return (
    <nav className={show ? "nav" : "nav-hidden"}>
      <div className="logo">
        <img src={profilePic} className="pp" alt="Profile pictrue" onClick={() => navigate("/")} />
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link>
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}> About </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}> Portfolio </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact </Link>
      </div>
    </nav>
  )
}
