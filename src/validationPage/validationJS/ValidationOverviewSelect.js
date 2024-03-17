import React from "react";
import "../validationCSS/validationOverviewSelect.css";
function validationOverviewSelect(props){

    const setParent = (v) => {
        const bar = document.getElementById("bar");
        props.onData(v);
        bar.style.width = '100%';
        bar.style.left = '0%';
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
            <div id="select">
                <p onClick={()=> setParent(0)}>Qualification</p>
                <p onClick={()=> setParent(1)}>Cycle Development</p>
            </div>
            <div className="vselecteBar">
                <div id="bar" className="vbar">

                </div>

            </div>

        </div>
        
        
    )


}

export default validationOverviewSelect;