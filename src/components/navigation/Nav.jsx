import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profilePic from "../../assets/radical_logo_transparent.png";
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
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link>
        <Link to="/services" className={location.pathname === "/services" ? "nav-link active" : "nav-link"}> Services </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact </Link>
    </nav>
  )
}
