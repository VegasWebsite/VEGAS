import React, { useEffect, useRef } from "react";
import "../companyPageCSS/headOfficeMap.css";
const {kakao} = window;

function FactoryMap(props){
    const mapInstanceRef = useRef(null);

    useEffect(()=>{
        const container = document.getElementById("factory");
        const options ={
            center: new kakao.maps.LatLng(37.35327729999999 ,127.3554636),
            Level:4
        };
        const map = new kakao.maps.Map(container,options);
        mapInstanceRef.current = map;
    
    },[]);

    useEffect(() => {
        const map = mapInstanceRef.current;
        if ( map && props.activeImage === 3) {
            map.relayout();
        }
    }, [props.activeImage]);
    return(
        <div id="headOfficeMap">
            <div id="factory">
            </div>

        </div>
    )

}

export default FactoryMap;