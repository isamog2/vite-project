
import "../components/ComponentsStyling/App.scss";
import CvComponent from "../components/CVComponent/CvComponent.jsx";
import Header from "../components/Header/Header.jsx"

function Home(props) {

    console.log(props)
    return (
        <>
        <div className="home">
        <div>
            <Header> {props.testProps} </Header>
        </div>
            <CvComponent />
        </div>
        </>
    )
}

export default Home
