import React from "react";
import "../validationCSS/validationBanner.css";
import Banner from "../validationIMG/validationBanner.png";

function ValidationBanner(){
    return(
        <div id="banner">
            <img src={Banner}/>

        </div>
    )
}

export default ValidationBanner;