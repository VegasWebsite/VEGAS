import React, { useState } from "react";
import "../companyPageCSS/companyPage.css"

import ComponyOverview from "../companyPageIMG/companyOverview.svg";
import Ceo from "../companyPageIMG/ceo.svg";
import OrganizationChart from "../companyPageIMG/organizationChart.svg";

import CommonFooter from "../../util/utilJS/CommonFooter";
import CommonHeader from "../../util/utilJS/CommonHeader";
import CompanyBanner from "./companyBanner";
import CompanyOverviewSelect from "./CompanyOverviewSelect";
import CompanyWaytoBackground from "./CompanyWaytoBackground";
function CompanyPage() {

    const [activeImage, setActiveImage] = useState(0);
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
                <CommonHeader/>
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
                    <CompanyWaytoBackground/>
                </div>
                
                <div id="companyFooter">
                    <CommonFooter/>
                </div>
            </div>
            
        </div>
    )
}

export default CompanyPage;