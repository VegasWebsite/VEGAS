import React from "react";
import "../mainPageCSS/mainPageBanner.css";
import Text from "../mainPageIMG/mainText.svg"

function MainBanner(){
    return(
        <div className="mainBanner">
            <img src = {Text} className="mainText"/>
        </div>
    )
}

export default MainBanner;