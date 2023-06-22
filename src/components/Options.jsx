import * as React from 'react';
import './ComponentsStyling/App.scss'
// import * as Tabs from '@radix-ui/react-tabs';
import '../components/ComponentsStyling/RadixStyles.scss';
import CvButton2 from "./CvButton2.jsx";
import CvButton1 from "./CvButton1.jsx";
import OpenOptions from "./OpenOptions.jsx";

function Options() {
    return (
            <button onClick={OpenOptions}> `${CvButton2}` </button>
    );
}

export default Options;