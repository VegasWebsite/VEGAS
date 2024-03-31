import React, { useState } from "react";
import "../automationPageCSS/automationOverviewSelect.css";

function AutomationOverviewSelect(props){
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
            bar.style.width = '33%';
            bar.style.left = '0%';
        }

        if(v == 1){
            bar.style.width = '33%';
            bar.style.left = '34%';
        }

        if(v == 2){
            bar.style.width = '33%';
            bar.style.left = '67%';
        }
        
      }
    

    return(
        <div className="automationOverviewSelects">
            <div className="aselects">
                <p onClick={()=> setParent(0)} style={{fontWeight: selectedTab === 0 ? 600 : 'normal'}}>SCADA SYSTEM</p>
                <p onClick={()=> setParent(1)} style={{fontWeight: selectedTab === 1 ? 600 : 'normal'}}>After Service</p>
                <p onClick={()=> setParent(2)} style={{fontWeight: selectedTab === 2 ? 600 : 'normal'}}>EMS</p>
            </div>
            <div className="aselecteBar">
                <div id="bar" className="automationOverviewbar">

                </div>

            </div>
        </div>
    )


}

export default AutomationOverviewSelect;