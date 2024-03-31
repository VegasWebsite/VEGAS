import React,{useEffect, useState} from "react";
import "../companyPageCSS/companyWayBackground.css";
import WaytoBackground from "../companyPageIMG/waytoBackground.svg";
import MWaytoBackGround from "../companyPageIMG/mobileIMG/mWaytoBackground.svg";
import HeadOfficeMap from "./HeadOfficeMap";
import FactoryMap from "./FactoryMap";

function CompanyWaytoBackground(props){

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
    
    return(
        <div id="companyWayBackground">
            {(screenWidth <= 900) ? (
                <>
                    <img src={MWaytoBackGround} />
                </>
            ) : (
                <>
                    <img src={WaytoBackground} />
                </>
            )}
            <div id="companyWay">
                <div id="companyMaps">
                    <div id="companyMap1">
                        <h4>본사</h4>
                        <div id="individual_map">
                            <HeadOfficeMap activeImage = {props.activeImage}/>

                        </div>
                        <p>경기도 성남시 중원구 사가막골 62번길 33(성남 센터엠지식산업센터9층),904호</p>
                        <p>13211</p>
                    </div>

                    <div id="companyMap2">
                        <h4>공장</h4>
                            
                        <div id="individual_map">
                            <FactoryMap activeImage ={props.activeImage}/>
                        </div>
                        <p>경기 광주시 곤지암을 곤지암리 108</p>
                        <p>12801</p>   
                    </div>

                </div>

            </div>
           

        </div>
    )
}

export default CompanyWaytoBackground;