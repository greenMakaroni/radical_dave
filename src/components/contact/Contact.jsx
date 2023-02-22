import useOnScreen from "../../useOnScreen"
import { useRef } from "react"
import useWindowDimensions from "../../useWindowDimensions"

import "./contact.scss"

const Contact = () => {
    const { height, width } = useWindowDimensions()

    const header = useRef()
    const isVisible = useOnScreen(header)

    return (
        <div style={width < 768 ? { height: "60vh" } : { height: "90vh" }} className="contact">
            <h1 ref={header} className={isVisible ? "contact-header text-in" : "contact-header"}>
                get in touch
            </h1>
            <h3 ref={header} className={isVisible ? "contact-par text-in" : "contact-par"}>
                radical.dave.software@gmail.com
            </h3>
        </div>
    )
}

export default Contact