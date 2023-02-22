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
                            <h1 className={width < 768 ? " about-title-mobile" : "about-title"}> {title} </h1>
                            <p className={width < 768 ? "element-par-mobile" : "element-par"}> {paragraph} </p>
                        </div>

                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <img src={src} alt="alt" className={width < 768 ? "about-pic-mobile" : "about-pic"} attribution={attribution} />
                        </div>
                    </>
                    :
                    <>
                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <img src={src} alt="alt" className={width < 768 ? "about-pic-mobile" : "about-pic"} attribution={attribution} />
                        </div>

                        <div ref={el} className={isVisible ? "about-element about-in" : "about-element"}>
                            <h1 className={width < 768 ? " about-title-mobile" : "about-title"}> {title} </h1>
                            <p className={width < 768 ? "element-par-mobile" : "element-par"}> {paragraph} </p>
                        </div>
                    </>
            }

        </>
    )
}

export default AboutElement