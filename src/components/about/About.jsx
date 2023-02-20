import "./about.scss"
import AboutWeb from "./AboutWeb"
import AboutMobile from "./AboutMobile"
import useWindowDimensions from "../../useWindowDimensions"

const About = () => {
    const { height, width } = useWindowDimensions()

    return (
        <>
            {width > 1300 ? <AboutWeb /> : <AboutMobile />}
        </>
    )
}

export default About