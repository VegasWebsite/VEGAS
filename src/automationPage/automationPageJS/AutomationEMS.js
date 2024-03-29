import React from "react";

import "../automationPageCSS/automationEMS.css"
import EMS1 from "../automationPageIMG/EMS1.svg"
import EMS2 from "../automationPageIMG/EMS2.svg"
import EMS3 from "../automationPageIMG/EMS3.svg"


function AutomationEMS() {

    return (
        <div className="automationEMS">

            <img src={EMS1} loading="lazy"/>
            <img src={EMS2} loading="lazy"/>
            <img src={EMS3} loading="lazy"/>

        </div>
    )
}

export default AutomationEMS;