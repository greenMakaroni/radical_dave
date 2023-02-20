import AboutElement from "./AboutElement"
import "./about.scss"


const AboutWeb = () => {

    return (
        <div className="aboutSection">
            <div className="about">
                <AboutElement
                    src="./src/assets/pas.jpg"
                    attribution="Photo by Alexander Suhorucov"
                    paragraph="My mission is to bring your business to the online world, your customer is already there looking for you!"
                    title="THE MISSION"
                    reversed={false}
                />
                <AboutElement
                    src="./src/assets/pjj.jpg"
                    attribution="Photo by João Jesus: https://www.pexels.com/photo/selective-focus-photo-of-a-red-tulip-flower-2480072/"
                    paragraph="By adhering to UX/UI design principles I make websites user friendly and pleasant to look at. I also specialize in embedding 3D into websites, creating stunning animated scenes. Small business or not, I can make it stand out."
                    title="THE VALUE"
                    reversed={true}
                />
                <AboutElement
                    src="./src/assets/pmk.jpg"
                    attribution=""
                    paragraph="My mission is to bring your business to the online world, your customer is already there looking for you!"
                    title="THE SERVICE"
                    reversed={false}
                />
            </div>
        </div>
    )
}

export default AboutWeb