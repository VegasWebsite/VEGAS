import React  from "react";
import "../contactCSS/contactBanner.css";
import Banner from "../contactIMG/contactBanner.png";

function ContectBanner() {
    return(
        <div id="banner">
            <img src={Banner}/>
        </div>
    )
}

export default ContectBanner;