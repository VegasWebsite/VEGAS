import React, { useEffect, useState } from "react";

import "../validationCSS/validationCycleDevelopment.css";
import CycleDevelopment1 from "../validationIMG/cycleDevelopment1.svg";
import CycleDevelopment2 from "../validationIMG/cycleDevelopment2.svg";
import CycleDevelopment3 from "../validationIMG/cycleDevelopment3.svg";
import CycleDevelopment4 from "../validationIMG/cycleDevelopment4.svg";
import VHP1 from "../validationIMG/VHP1.svg";
import VHP2 from "../validationIMG/VHP2.svg";
import ToggleS1 from "../validationIMG/toggleS1.svg";
import ToggleS1Act from "../validationIMG/toggleS1Act.svg"
import ToggleS1Content from "../validationIMG/toggleS1Content.svg";
import ToggleS2 from "../validationIMG/toggleS2.svg";
import ToggleS2Act from "../validationIMG/toggleS2Act.svg"
import ToggleS2Content from "../validationIMG/toggleS2Content.svg";
import ToggleS3 from "../validationIMG/toggleS3.svg";
import ToggleS3Act from "../validationIMG/toggleS3Act.svg"
import ToggleS3Content from "../validationIMG/toggleS3Content.svg";
import ToggleS4 from "../validationIMG/toggleS4.svg";
import ToggleS4Act from "../validationIMG/toggleS4Act.svg"
import ToggleS4Content from "../validationIMG/toggleS4Content.svg";



function ValidationCycleDevelopment(){
    const [active1,setActive1] = useState(false);
    const [active2,setActive2] = useState(false);
    const [active3,setActive3] = useState(false);
    const [active4,setActive4] = useState(false);
    
    const toggleS1Active = () => {
        if(active1){
            setActive1(false);
        }else{
            setActive1(true);
        }
        
    };

    const toggleS2Active = () => {
        if(active2){
            setActive2(false);
        }else{
            setActive2(true);
        }
        
    };

    const toggleS3Active = () => {
        if(active3){
            setActive3(false);
        }else{
            setActive3(true);
        }
        
    };


    const toggleS4Active = () => {
        if(active4){
            setActive4(false);
        }else{
            setActive4(true);
        }
        
    };



  
 
    return(
        <div>
            
        </div>
    )

}

export default ValidationCycleDevelopment;