import React from "react";
import "../companyPageCSS/companyWayBackground.css";
import WaytoBackground from "../companyPageIMG/waytoBackground.svg";

function CompanyWaytoBackground(){
    return(
        <div id="companyWayBackground">
            <img src={WaytoBackground} />
            <div id="companyWay">
                <div id="companyMaps">

                </div>

            </div>
           

        </div>
    )
}

export default CompanyWaytoBackground;