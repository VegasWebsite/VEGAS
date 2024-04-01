import React from "react";


import "../validationCSS/validationQualification.css";
import Qualification1 from "../validationIMG/qualification1.png";
import Qualification3 from "../validationIMG/qualification3.png";
import QualificationVideo from "../validationIMG/qualificationVideo.mp4";
import QualificationBottom1 from "../validationIMG/qualificationBottom1.png";
import QualificationBottom2 from "../validationIMG/qualificationBottom2.png";
import QualificationBottom3 from "../validationIMG/qualificationBottom3.png";


function ValidationQualification(){
    return(
        <div id="validationQualification">

            <img src={Qualification1} loading="lazy"/>
            <video muted autoPlay loop playsInline>
                <source src={QualificationVideo} type="video/mp4"/>
            </video>
            <img src={Qualification3} loading="lazy"/>

            <div className="qualificationBottomIMG">
                <img src={QualificationBottom1}/>
                <img src={QualificationBottom2}/>
                <img src={QualificationBottom3}/>
            </div>

        </div>
    )

}

export default ValidationQualification;