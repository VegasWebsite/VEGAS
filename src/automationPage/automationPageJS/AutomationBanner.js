import React from "react";
import "../automationPageCSS/automationBanner.css";
import Banner from "../automationPageIMG/automationBanner.png";

function AutomationBanner(){
    return(
        <div id="banner">
            <img src={Banner}/>
        </div>
    )
}

export default AutomationBanner;