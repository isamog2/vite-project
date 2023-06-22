import * as React from 'react';
import './ComponentsStyling/App.scss'
import isaPhoto from '../assets/IsaPhoto.jpg'

function AboutMe() {

    return (
        <div className="img-div">
            <img src={isaPhoto} alt="My face"/>
            </div>
    );
}

export default AboutMe;