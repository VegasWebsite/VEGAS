import React, { useState } from 'react';
import "../validationCSS/validationOverviewSelect.css";

function ValidationOverviewSelect(props){
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
            bar.style.width = '50%';
            bar.style.left = '0%';
        }

        if(v == 1){
            bar.style.width = '50%';
            bar.style.left = '50%';
        }
      }

    return(
        <div className="validationOverviewSelect">
            <div className="selects">
                <p onClick={()=> setParent(0)} style={{fontWeight: selectedTab === 0 ? 600 : 'normal'}}>Qualification</p>
                <p onClick={()=> setParent(1)} style={{fontWeight: selectedTab === 1 ? 600 : 'normal'}}>Cycle Development</p>
            </div>
            <div className="vselecteBar">
                <div id="bar" className="vbar">
                </div>
            </div>
        </div>
    );
}

export default ValidationOverviewSelect;