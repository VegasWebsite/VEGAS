import React from "react";
import "../companyPageCSS/companyBanner.css"
import Banner from "../companyPageIMG/companyBanner.svg";

function CompanyBanner(){
    return(
        <div id="companyBanner">
            <img id="banner" src={Banner}/> 
        </div>
    )
}

export default CompanyBanner;