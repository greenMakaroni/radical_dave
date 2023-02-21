import useOnScreen from "../../useOnScreen"
import { useRef } from "react"
import "./contact.scss"

const Contact = () => {

    const header = useRef()
    const isVisible = useOnScreen(header)

    return (
        <div className="contact">
            <h1 ref={header} className={isVisible ? "contact-header text-in" : "contact-header"}>
                Get in touch
            </h1>
            <h3 ref={header} className={isVisible ? "contact-par text-in" : "contact-par"}>
                radical.dave.software@gmail.com
            </h3>
        </div>
    )
}

export default Contact