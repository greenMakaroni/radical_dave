//  react-router-dom components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  pages
import Home from "./pages/home/Home"
import Services from "./pages/services/Services"
import Contact from "./pages/contact/Contact"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/services" element={ <Services /> } />
        <Route exact path="/contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
