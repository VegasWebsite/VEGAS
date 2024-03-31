import React, { useState, useEffect } from "react";
import "../companyPageCSS/companyPage.css"



import CommonFooter from "../../util/utilJS/CommonFooter";
import CompanyHeader from "./CompanyHeader";
import CompanyBanner from "./CompanyBanner"; 
import CompanyOverviewSelect from "./CompanyOverviewSelect";
import CompanyWaytoBackground from "./CompanyWaytoBackground";

import CompanyOverview from "../companyPageIMG/companyOverview.svg";
import Ceo from "../companyPageIMG/ceo.svg";
import OrganizationChart from "../companyPageIMG/organizationChart.svg";
import MCompanyOverview from "../companyPageIMG/mobileIMG/mCompanyOverview.svg";
import MCompanyOverview2 from "../companyPageIMG/mobileIMG/mCompanyOverview2.svg";
import MCEO from "../companyPageIMG/mobileIMG/mCEO.svg";
import MOrganizationChart from "../companyPageIMG/mobileIMG/mOrganizationChart.svg";


function CompanyPage() {

  
    const [activeImage, setActiveImage] = useState(0);
  

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

    const childData = (data) => {
        showImage(data);
    }

    const showImage = (index) =>{
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
                {(screenWidth <= 900) ? (
                    <>
                        <img src={MCompanyOverview2} className={activeImage === 0 ? 'active' : 'image'} />
                        <img src={MCEO} className={activeImage === 1 ? 'active' : 'image'} />
                        <img src={MOrganizationChart} className={activeImage === 2 ? 'active' : 'image'} />
                        <div id="companyWaytoBackground" className={activeImage === 3 ? 'active' : 'image'}>
                            <CompanyWaytoBackground activeImage={activeImage} />
                        </div>
                    </>
                ) : (
                    <>
                        <img src={CompanyOverview} className={activeImage === 0 ? 'active' : 'image'} />
                        <img src={Ceo} className={activeImage === 1 ? 'active' : 'image'} />
                        <img src={OrganizationChart} className={activeImage === 2 ? 'active' : 'image'} />
                        <div id="companyWaytoBackground" className={activeImage === 3 ? 'active' : 'image'}>
                            <CompanyWaytoBackground activeImage={activeImage} />
                        </div>
                    </>
                )}
            </div>
            <div id="companyFooter">
                    <CommonFooter/>
            </div>
            
        </div>
    )
}

export default CompanyPage;