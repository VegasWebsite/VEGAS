import React from "react";
import "../companyPageCSS/companyBanner.css"
import Banner from "../companyPageIMG/companyBanner.png";

function CompanyBanner(){
    return(
        <div id="banner">
            <img src={Banner}/>
        </div>
    )
}

export default CompanyBanner;