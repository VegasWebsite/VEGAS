import React, { useState, useEffect } from "react";

import AfterService1 from "../automationPageIMG/afterService1.svg"
import AfterServiceHyperLink from "../automationPageIMG/afterServiceHyperLink.svg"
import AfterService2 from "../automationPageIMG/afterService2.png"
import AfterService3 from "../automationPageIMG/afterService3.png"

import MAfterService1 from "../automationPageIMG/mobileIMG/mAfterService1.svg"
import MAfterService2 from "../automationPageIMG/mobileIMG/mAfterService2.png"
import MAfterService3 from "../automationPageIMG/mobileIMG/mAfterService3.png"

import "../automationPageCSS/automationAfterService.css";

function AutomationAfterService() {

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

    const goLink = () => {
        window.location.href = "https://grmetal.co.kr/";
    }



    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };



    return (
        <div className="automationAfterService">
            {(screenWidth <= 900) ? (
                <>
                    <div className="afterService1">
                        <img src={MAfterService1} loading="lazy" />
                    </div>
                    <div className="mHyperLink">
                        <img onClick={goLink} src={AfterServiceHyperLink} loading="lazy" />
                    </div>
                    <div className="additionalIMG">
                        <img src={MAfterService2} loading="lazy" />
                        <img src={MAfterService3} loading="lazy" />
                    </div>
                </>
            ) : (
                <>
                    <div className="afterService1">
                        <img src={AfterService1} loading="lazy" />
                    </div>
                    <div className={isHovering ? "hoverLink" : "hyperLink"}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <img onClick={goLink} src={AfterServiceHyperLink} loading="lazy" />
                    </div>
                    <div className="additionalIMG">
                        <img src={AfterService2} loading="lazy" />
                        <img src={AfterService3} loading="lazy" />
                    </div>
                </>
            )}

        </div>
    )
}

export default AutomationAfterService;