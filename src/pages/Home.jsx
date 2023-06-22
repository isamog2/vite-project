import AboutMe from "../components/AboutMe.jsx";
import Options from "../components/Options.jsx"
import "../components/ComponentsStyling/App.scss";

function Home() {
    return (
        <div className="header">
            <AboutMe />
            <div className="text">
            <Options />
            </div>
        </div>
    )
}

export default Home
