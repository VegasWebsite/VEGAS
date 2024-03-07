import React from "react";
import imgLog from "../mainPageIMG/headerlogo.svg";
import "../mainPageCSS/mainPageHeader.css"


function MainHeader(){

    return(
        <div id="mainPageHeader">

            <div id="mainPageHeaderLogo">
                <img src={imgLog}></img>
            </div>

            <div id="mainPageHeaderMenu">
                <p>Company</p>
                <p>Validation</p>
                <p>Automation</p>
                <p>Contact</p>
            </div>


        </div>
    )

}
export default MainHeader;