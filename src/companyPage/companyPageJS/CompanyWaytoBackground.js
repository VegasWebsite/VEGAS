import React from "react";
import "../companyPageCSS/companyWayBackground.css";
import WaytoBackground from "../companyPageIMG/waytoBackground.svg";
import HeadOfficeMap from "./HeadOfficeMap";
import FactoryMap from "./FactoryMap";

function CompanyWaytoBackground(props){
    console.log(props.activeImage + "d");
    return(
        <div id="companyWayBackground">
            <img src={WaytoBackground} />
            <div id="companyWay">
                <div id="companyMaps">
                    <div id="companyMap1">
                        <h4>본사</h4>
                        <div id="individual_map">
                            <HeadOfficeMap activeImage = {props.activeImage}/>

                        </div>
                        <p>경기도 성남시 중원구 사가막골 62번길 33(성남 센터엠지식산업센터9층),904호</p>
                        <p>00000</p>

                    </div>
                    <div id="companyMap2">
                        <h4>공장</h4>
                            
                        <div id="individual_map">
                            <FactoryMap activeImage ={props.activeImage}/>
                        </div>
                        <p>경기 광주시 곤지암을 곤지암리 108</p>
                        <p>00000</p>   
                        
                    </div>

                </div>

            </div>
           

        </div>
    )
}

export default CompanyWaytoBackground;