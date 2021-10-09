import React from 'react';
import "./Titleshowcase.css";

const TitleShowcae = (props) => {
    return (
        <div className="title-showcase">
           {props.children}
        </div>
    )
}

export default TitleShowcae
