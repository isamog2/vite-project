import AboutMe from "../components/Header/AboutMe.jsx";
import HeaderMenu from "../components/Header/HeaderMenu.jsx"
import "../components/ComponentsStyling/App.scss";
import CvComponent from "../components/CVComponent/CvComponent.jsx";

function Home() {
    return (
        <div className="home">
        <div className="header">
            <AboutMe />
            <HeaderMenu />
        </div>
            <CvComponent />
        </div>
    )
}

export default Home
