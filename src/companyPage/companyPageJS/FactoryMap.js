import React, { useEffect, useRef } from "react";
import "../companyPageCSS/headOfficeMap.css";
const {kakao} = window;

function FactoryMap(props){
    const mapInstanceRef = useRef(null);

    useEffect(()=>{
        const container = document.getElementById("factory");
        const options ={
            center: new kakao.maps.LatLng(37.353414 ,127.355526),
            level:4
        };
        const map = new kakao.maps.Map(container,options);
        var markerPosition  = new kakao.maps.LatLng(37.353414 ,127.355526); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    
        mapInstanceRef.current = map;
    },[]);

    useEffect(() => {
        const map = mapInstanceRef.current;
        if ( map && props.activeImage === 3) {
           
            map.relayout();
            var moveLatLon = new kakao.maps.LatLng(37.353414 ,127.355526);
            map.setCenter(moveLatLon);
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