import React from "react";
import "../validationCSS/validationBanner.css";
import Banner from "../validationIMG/validationBanner.svg";

function ValidationBanner(){
    return(
        <div id="banner">
            <img src={Banner}/>

        </div>
    )
}

export default ValidationBanner;