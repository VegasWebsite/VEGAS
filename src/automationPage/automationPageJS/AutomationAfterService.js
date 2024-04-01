import React from "react";

import AfterService1 from "../automationPageIMG/afterService1.svg"
import AfterServiceHyperLink from "../automationPageIMG/afterServiceHyperLink.svg"
import AfterService2 from "../automationPageIMG/afterService2.png"
import AfterService3 from "../automationPageIMG/afterService3.png"
import "../automationPageCSS/automationAfterService.css";

function AutomationAfterService() {

    const goLink = () =>{
        window.location.href = "https://grmetal.co.kr/";
    }
    return (
        <div className="automationAfterService">

            <div className="afterService1">
                <img src={AfterService1} loading="lazy"/>
            </div>
            <div className="hyperLink">
                <img onClick={goLink} src={AfterServiceHyperLink} loading="lazy"/>
            </div>
            <div className="additionalIMG">
                <img src={AfterService2} loading="lazy"/>
                <img src={AfterService3} loading="lazy"/>
            </div>
            
        </div>
    )
}

export default AutomationAfterService;