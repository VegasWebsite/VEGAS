import React, { useState } from "react";

import "../automationPageCSS/automationPage.css"
import AutomationHeader from "./AutomationHeader";
import AutomationBanner from "./AutomationBanner";
import CommonFooter from "../../util/utilJS/CommonFooter";
import AutomationOverviewSelect from "./AutomationOverviewSelect";
import AutomationScadaSystem from "./AutomationScadaSystem";
import AutomationAfterService from "./AutomationAfterService";
import AutomationEMS from "./AutomationEMS";


function AutomationPage() {
    const [activeImage, setActiveImage] = useState(0);
    const childData = (data) => {
        console.log(data);
        showImage(data);
    }
    const showImage = (index) =>{
        setActiveImage(index);
    }

    return (
        <div id="automationPage">
            <div id="automationHeader">
                <AutomationHeader/>
            </div>
            <div id="automationBanner">
                <AutomationBanner/>
            </div>

            <div id="automationOverviewSelect">
                
                  <AutomationOverviewSelect onData = {childData}/>
             </div>

             <div id="automationview">
                <div id="scadaSystem" className={activeImage == 0 ? 'active' : 'image'}>
                    <AutomationScadaSystem />
                </div>
                <div id="afterService" className={activeImage == 1 ? 'active' : 'image'}>
                    <AutomationAfterService />
                </div>
                <div id="EMS" className={activeImage == 2 ? 'active' : 'image'}>
                    <AutomationEMS />
                </div>
            </div>


            <div id="automationFooter">
                    <CommonFooter/>
            </div>
        </div>
    )
}

export default AutomationPage;