import React, { useState, useEffect } from "react";


import "../validationCSS/validationQualification.css";
import Qualification1 from "../validationIMG/qualification1.png";
import Qualification3 from "../validationIMG/qualification3.png";
import QualificationVideo from "../validationIMG/qualificationVideo.mp4";
import QualificationBottom1 from "../validationIMG/qualificationBottom1.png";
import QualificationBottom2 from "../validationIMG/qualificationBottom2.png";
import QualificationBottom3 from "../validationIMG/qualificationBottom3.png";

import MQualification1 from "../validationIMG/mobileIMG/mQualification1.svg";
import MQualification3 from "../validationIMG/mobileIMG/mQualification3.png";


function ValidationQualification() {

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
        <div id="validationQualification">
            {(screenWidth <= 900) ? (
                <>
                    <img src={MQualification1} loading="lazy" />
                    <video muted autoPlay loop playsInline>
                        <source src={QualificationVideo} type="video/mp4" />
                    </video>
                    <img src={MQualification3} loading="lazy" />

                    // TODO : QualificationBottom images 정렬
                    <div className="mQualificationBottomIMG">
                        <img src={QualificationBottom1} />
                        <img src={QualificationBottom2} />
                        <img src={QualificationBottom3} />
                    </div>
                </>
            ) : (
                <>
                    <img src={Qualification1} loading="lazy" />
                    <video muted autoPlay loop playsInline>
                        <source src={QualificationVideo} type="video/mp4" />
                    </video>
                    <img src={Qualification3} loading="lazy" />

                    <div className="qualificationBottomIMG">
                        <img src={QualificationBottom1} />
                        <img src={QualificationBottom2} />
                        <img src={QualificationBottom3} />
                    </div>
                </>
            )}

        </div>
    )

}

export default ValidationQualification;