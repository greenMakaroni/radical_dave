import "./about.scss"

const AboutMobile = () => {
    return (
        <div className="aboutSection">
            <div className="about">
                <div className="about-element">
                    <img src="./src/assets/pas.jpg" alt="customers" className="about-pic" attribution="Photo by Alexander Suhorucov" />
                </div>
                <div className="about-element">
                    <h1 className="about-title"> THE MISSION </h1>
                    <p className="element-par" style={{ maxWidth: "100vw" }}> My mission is to bring your business to the online world, your customer is already there looking for you! </p>
                </div>
                <div className="about-element">
                    <img src="./src/assets/pjj.jpg" alt="flowers" className="about-pic" attribution="Photo by João Jesus: https://www.pexels.com/photo/selective-focus-photo-of-a-red-tulip-flower-2480072/" />
                </div>
                <div className="about-element">
                    <h1 className="about-title"> THE VALUE </h1>
                    <p className="element-par" style={{ maxWidth: "100vw" }}>By adhering to UX/UI design principles I make websites user friendly and pleasant to look at. I also specialize in embedding 3D into websites, creating stunning animated scenes. Small business or not, I can make it stand out.</p>
                </div>
                <div className="about-element">
                    <img src="./src/assets/pmk.jpg" alt="flowers" className="about-pic" attribution="Photo by João Jesus: https://www.pexels.com/photo/selective-focus-photo-of-a-red-tulip-flower-2480072/" />
                </div>
                <div className="about-element">
                    <h1 className="about-title"> THE SERVICE </h1>
                    <p className="element-par" style={{ maxWidth: "100vw" }}> I'm not here just to sell you the product, I'll answer any question you may have, I can prepare you for website maintenance or just take that responsibility upon myself to save your time.</p>
                </div>
            </div>
        </div>)
}


export default AboutMobile