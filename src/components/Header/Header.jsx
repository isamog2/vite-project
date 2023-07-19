import * as React from 'react';
import '../ComponentsStyling/App.scss'
import HeaderMenu from "./HeaderMenu.jsx";
import Construction from "./Construction.jsx";
import isaPhoto from "../../assets/IsaPhoto.jpg";

//Props are a list of properties used to pass data to a component;
// Components are customized and made reusable with props.

function Header() {
    return (
        <>
                <div className="header">
                    <img className="img-div" src={isaPhoto} alt="My face"/>
                    <HeaderMenu />
                    <Construction />
                </div>

        </>
    )
}

export default Header