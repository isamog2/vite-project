import AboutMe from "../components/Header/AboutMe.jsx";
import HeaderMenu from "../components/Header/HeaderMenu.jsx"
import "../components/ComponentsStyling/App.scss";
import CvComponent from "../components/CVComponent/CvComponent.jsx";
import Construction from "../components/Header/Construction.jsx";

function Home() {
    return (
        <>
        <div className="home">
        <div className="header">
            <AboutMe />
            <HeaderMenu />
            <Construction />
        </div>
            <CvComponent />
        </div>
        </>
    )
}

export default Home
