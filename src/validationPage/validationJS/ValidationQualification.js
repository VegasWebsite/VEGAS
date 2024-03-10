import React from "react";


import "../validationCSS/validationQualification.css";
import Qualification1 from "../validationIMG/qualification1.svg";
import Qualification2 from "../validationIMG/qualification2.svg";
import Qualification3 from "../validationIMG/qualification3.svg";



function ValidationQualification(){
    return(
        <div id="validationQulification">
            <img src={Qualification1} loading="lazy"/>
            <img src={Qualification2} loading="lazy"/>
            <img src={Qualification3} loading="lazy"/>

        </div>
    )

}

export default ValidationQualification;