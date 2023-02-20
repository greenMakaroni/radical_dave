import useOnScreen from "../../useOnScreen"
import { useRef } from "react"

import "./about.scss"

const AboutElement = ({ src, attribution, paragraph, title, reversed }) => {

    const el = useRef()
    const isVisible = useOnScreen(el)

    return (
        <>
            {
                reversed ?
                    <>
                        <div className={isVisible ? "about-element about-in" : "about-element"}>
                            <h1 className="about-title"> {title} </h1>
                            <p className="element-par"> {paragraph} </p>
                        </div>
                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <img src={src} alt="alt" className="about-pic" attribution={attribution} />
                        </div>
                    </>
                    :
                    <>
                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <img src={src} alt="alt" className="about-pic" attribution={attribution} />
                        </div>
                        <div className={isVisible ? "about-element about-in" : "about-element"}>
                            <h1 className="about-title"> {title} </h1>
                            <p className="element-par"> {paragraph} </p>
                        </div>
                    </>
            }

        </>
    )
}

export default AboutElement