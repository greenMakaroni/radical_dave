import AboutElement from "./AboutElement"
import useWindowDimensions from "../../useWindowDimensions"
import pacUrl from "./pac.jpg"
import pjjUrl from "./pjj.jpg"
import pmkUrl from "./pmk.jpg"

import "./about.scss"

const About = () => {
    const { height, width } = useWindowDimensions()

    return (
        <div className="aboutSection">
            <div id="about">
                <AboutElement
                    src={pacUrl}
                    attribution="Photo by Andrea Piacquadio: https://www.pexels.com/photo/photo-of-man-wearing-brown-coat-842539/"
                    paragraph="I focus on helping small businesses and freelancers to establish online presence by building stunning websites."
                    title="The Mission"
                    reversed={false}
                />
                <AboutElement
                    src={pjjUrl}
                    attribution="Photo by João Jesus: https://www.pexels.com/photo/selective-focus-photo-of-a-red-tulip-flower-2480072/"
                    paragraph="Eye catching design and flawless user experience is my standard. I can make your business stand out with simple 3D models and mesmerising animations."
                    title="The Value"
                    reversed={width > 1050}
                />
                <AboutElement
                    src={pmkUrl}
                    attribution=""
                    paragraph="I'll answer any question you may have and prepare you for the future of website maintenance, I can also take that responsibility upon myself to save you time and headache."
                    title="The Service"
                    reversed={false}
                />
            </div>
        </div>
    )
}

export default About