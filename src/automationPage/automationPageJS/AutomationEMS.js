import React, { useState, useEffect } from "react";

import "../automationPageCSS/automationEMS.css";
import EMS1 from "../automationPageIMG/EMS1.png";
import EMS2 from "../automationPageIMG/EMS2.png";
import EMS3 from "../automationPageIMG/EMS3.png";
import MEMS1 from "../automationPageIMG/mobileIMG/mEMS1.svg";
import MEMS2 from "../automationPageIMG/mobileIMG/mEMS2.png";
import MEMS3 from "../automationPageIMG/mobileIMG/mEMS3.png";


function AutomationEMS() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="automationEMS">
            {(screenWidth <= 900) ? (
                <>
                    <img src={MEMS1} loading="lazy" />
                    <img src={MEMS2} loading="lazy" />
                    <img src={MEMS3} loading="lazy" />
                </>
            ) : (
                <>
                    <img src={EMS1} loading="lazy" />
                    <img src={EMS2} loading="lazy" />
                    <img src={EMS3} loading="lazy" />
                </>
            )}

        </div>
    )
}

export default AutomationEMS;