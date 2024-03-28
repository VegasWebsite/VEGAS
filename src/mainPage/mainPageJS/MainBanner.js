import React from "react";
import "../mainPageCSS/mainPageBanner.css";
import Banner from "../mainPageIMG/mainbackground.png";

function MainBanner(){
    return(
        <div id="banner">
            <img src = {Banner}/>
        </div>
    )
}

export default MainBanner;