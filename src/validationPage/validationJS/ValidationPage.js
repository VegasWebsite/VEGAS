import React, { useState } from "react";
import "../validationCSS/validationPage.css"
import CommonFooter from "../../util/utilJS/CommonFooter";
import ValidationHeader from "./ValidationHeader";
import ValidationBanner from "./ValidationBanner";
import ValidationOverviewSelect from "./ValidationOverviewSelect";
import ValidationQualification from "./ValidationQualification";
import ValidationCycle from "./ValidationCycle";

function ValidationPage() {
    const [activeImage, setActiveImage] = useState(0);
    const childData = (data) => {
        console.log(data);
        showImage(data);
    }
    const showImage = (index) =>{
        setActiveImage(index);
    }

    return (
        <div id="validationPage">
            <div id="validationHeader">
                <ValidationHeader/>
            </div>
            <div id="validationBanner">
                <ValidationBanner/>
            </div>
            <div id="validationOverviewSelect">
                  <ValidationOverviewSelect onData = {childData}/>
             </div>

             <div id="validationview">
                <div id="qualification" className={activeImage == 0 ? 'active' : 'image'}>
                    <ValidationQualification />
                </div>
                <div id="cycleDevelopment" className={activeImage == 1 ? 'active' : 'image'}>
                    <ValidationCycle/>
                </div>
            </div>
             <div id="validationFooter">
                    <CommonFooter/>
            </div>
        </div>
    )
}

export default ValidationPage;