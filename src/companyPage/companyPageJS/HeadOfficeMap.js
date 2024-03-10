import React, { useEffect, useRef } from "react";
import "../companyPageCSS/headOfficeMap.css";
const {kakao} = window;

function HeadOfficeMap(props){
    const mapInstanceRef = useRef(null);

    useEffect(()=>{
        const container = document.getElementById("map");
        const options ={
            center: new kakao.maps.LatLng(37.4352544 ,127.1752188),
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
            <div id="map">

            </div>

        </div>
    )

}

export default HeadOfficeMap;