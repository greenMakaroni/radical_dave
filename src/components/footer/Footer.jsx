import useWindowDimensions from "../../useWindowDimensions"
import "./footer.scss"

const Footer = () => {
    const { width } = useWindowDimensions()
    return (
        <div className="footer">
            <a target="new" style={width < 768 ? { fontSize: "5vw" } : { fontSize: "2vw" }} className="linkedIn-link" href="https://www.linkedin.com/in/dawid-markieton-1948391b8/">
                Connect with me on LinkedIn
            </a>
        </div>
    )
}

export default Footer