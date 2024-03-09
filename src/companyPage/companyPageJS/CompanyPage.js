import React, { useState } from "react";
import "../companyPageCSS/companyPage.css"

import ComponyOverview from "../companyPageIMG/companyOverview.svg";
import Ceo from "../companyPageIMG/ceo.svg";
import OrganizationChart from "../companyPageIMG/organizationChart.svg";

import CommonFooter from "../../util/utilJS/CommonFooter";
import CompanyHeader from "./CompanyHeader";
import CompanyBanner from "./CompanyBanner";
import CompanyOverviewSelect from "./CompanyOverviewSelect";
import CompanyWaytoBackground from "./CompanyWaytoBackground";
function CompanyPage() {

    const [activeImage, setActiveImage] = useState(0);
    console.log(activeImage +"active");
    const childData = (data) => {
        console.log(data + "받아옴");
        showImage(data);
    }


    const showImage = (index) =>{
        console.log(index);
        setActiveImage(index);

    }
    return (
        <div id="companyPage">
            <div id="companyHeader">
                <CompanyHeader/>
            </div>
            <div id="companyBanner">
                <CompanyBanner/>
            </div>
            <div id="companyOverviewSelect">
                    <CompanyOverviewSelect onData = {childData}/>
             </div>

            <div id="companyOverview">
                <img src={ComponyOverview} className={activeImage == 0 ? 'active' : 'image'}/>
                <img src={Ceo} className={activeImage == 1 ? 'active' : 'image'}/>
                <img src={OrganizationChart} className={activeImage == 2 ? 'active' : 'image'}/>
                <div id="companyWaytoBackground"  className={activeImage == 3 ? 'active' : 'image'}>
                    <CompanyWaytoBackground activeImage = {activeImage}/>
                </div>
            </div>
            <div id="companyFooter">
                    <CommonFooter/>
            </div>
            
        </div>
    )
}

export default CompanyPage;