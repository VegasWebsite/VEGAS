import React, { useState } from "react";
import "../companyPageCSS/companyOverviewSelect.css";

function CompanyOverviewSelect(props){
    const [selectedTab, setSelectedTab] = useState(0);

    const setParent = (v) => {
        const bar = document.getElementById("bar");
        props.onData(v);
        bar.style.width = '100%';
        bar.style.left = '0%';
        setSelectedTab(v);
        setTimeout(()=>resetBar(v), 500);
    }

    const resetBar =(v) => {
        const bar = document.getElementById("bar");
        if(v == 0){
            bar.style.width = '25%';
            bar.style.left = '0%';
        }

        if(v == 1){
            bar.style.width = '25%';
            bar.style.left = '25%';
        }

        if(v == 2){
            bar.style.width = '25%';
            bar.style.left = '50%';
        }

        if(v == 3){
            bar.style.width = '25%';
            bar.style.left = '75%';
        }
        
      }
    

    return(
        <div className="comPanyOverviewSelect">
            <div className="selects">
                <p onClick={()=> setParent(0)} style={{fontWeight: selectedTab === 0 ? 600 : 'normal'}}>기업 개요</p>
                <p onClick={()=> setParent(1)} style={{fontWeight: selectedTab === 1 ? 600 : 'normal'}}>대표자의 말</p>
                <p onClick={()=> setParent(2)} style={{fontWeight: selectedTab === 2 ? 600 : 'normal'}}>조직도</p>
                <p onClick={()=> setParent(3)} style={{fontWeight: selectedTab === 3 ? 600 : 'normal'}}>오시는 길</p>
            </div>
            <div className="selecteBar">
                <div id="bar" className="bar">

                </div>

            </div>
        </div>
    )


}

export default CompanyOverviewSelect;