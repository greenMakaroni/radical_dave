import useOnScreen from "../../useOnScreen"
import { useRef } from "react"
import useWindowDimensions from "../../useWindowDimensions"

import "./about.scss"

const AboutElement = ({ src, attribution, paragraph, title, reversed }) => {
    const { height, width } = useWindowDimensions()
    const el = useRef()
    const isVisible = useOnScreen(el)

    return (
        <>
            {
                reversed ?
                    <>
                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <h1 className="about-title"> {title} </h1>
                            <p className="element-par"> {paragraph} </p>
                        </div>
                        {
                            width > 1000 &&
                            <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                                <img src={src} alt="alt" className="about-pic" attribution={attribution} />
                            </div>
                        }

                    </>
                    :
                    <>
                        {
                            width > 1000 &&
                            <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                                <img src={src} alt="alt" className="about-pic" attribution={attribution} />
                            </div>
                        }
                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <h1 className="about-title"> {title} </h1>
                            <p className="element-par"> {paragraph} </p>
                        </div>
                    </>
            }

        </>
    )
}

export default AboutElement