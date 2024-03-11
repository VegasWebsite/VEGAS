import React from "react";
import "../mainPageCSS/mainPageBanner.css";
import Banner from "../mainPageIMG/mainbackground.svg";

function MainBanner(){
    return(
        <div id="banner">
            <img src = {Banner}/>
        </div>
    )
}

export default MainBanner;