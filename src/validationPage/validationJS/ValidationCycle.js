import React,{useEffect} from "react";


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
import "../validationCSS/validationCycleDevelopment.css";

function ValidationCycle(){
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
        <div className="validationCycleDevelopment">

            <img src={CycleDevelopment1} loading="lazy"/>

            <img src={CycleDevelopment2} loading="lazy"/>
            <div className="VHPImages">
                <img src={VHP1}/>
                <img src={VHP2}/>
            </div>

            <img src={CycleDevelopment3} loading="lazy"/>

            <img src={CycleDevelopment4} loading="lazy"/>
            <div className="toggle">
                {
                    !active1  ?  <div className="disable">
                    <img src={ToggleS1}  onClick={toggleS1Active} /> 
               
                    </div>
                     :
                    <div className="acctive">
                         <img src={ToggleS1Act} onClick={toggleS1Active}/>
                        
                    </div>
                    
                }
                <img src={ToggleS1Content}/>
                {
                    !active2  ? <div className="disable">
                    <img src={ToggleS2}  onClick={toggleS2Active} /> 
               
                    </div>
                    :
                    <div className="acctive">
                         <img src={ToggleS2Act} onClick={toggleS2Active}/>


                    </div>
                    
                }
                 <img src={ToggleS2Content}/>
                {
                    !active3  ? <div className="disable">
                        <img src={ToggleS3}  onClick={toggleS3Active} /> 
                   
                   </div> :
                    <div className="acctive">
                         <img src={ToggleS3Act} onClick={toggleS3Active}/>

                    </div>
                    
                }
                <img src={ToggleS3Content}/>
                {
                    !active4  ? <div className="disable">
                         <img src={ToggleS4}  onClick={toggleS4Active} /> 
                        
                        </div>
                    :
                    <div className="acctive">
                         <img src={ToggleS4Act} onClick={toggleS4Active}/>
                    </div>
                    
                }
                 <img src={ToggleS4Content}/>
            </div>

            

        </div>
    )

}
export default ValidationCycle;