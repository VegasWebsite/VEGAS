import React from "react";
import "../companyPageCSS/companyBanner.css"
import Banner from "../companyPageIMG/companyBanner.svg";

function CompanyBanner(){
    return(
        <div id="banner">
            <img src={Banner}/>
        </div>
    )
}

export default CompanyBanner;