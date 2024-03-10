import React from "react";
import "../companyPageCSS/companyOverviewSelect.css";
function CompanyOverviewSelect(props){

    const setParent = (v) => {
        const bar = document.getElementById("bar");
        props.onData(v);
        bar.style.width = '100%';
        bar.style.left = '0%';
        setTimeout(()=>resetBar(v), 500);
    }

    const resetBar =(v) => {
        const bar = document.getElementById("bar");
        console.log(v);
        if(v == 0){
            bar.style.width = '25%';
            bar.style.left = '0%';
        }

        if(v == 1){
            bar.style.width = '25%';
            bar.style.left = '26%';
        }

        if(v == 2){
            bar.style.width = '25%';
            bar.style.left = '52%';
        }

        if(v == 3){
            bar.style.width = '25%';
            bar.style.left = '75%';
        }
        
      }
    

    return(
        <div id="comPanyOverviewSelect">
            <div id="selects">
                <p onClick={()=> setParent(0)}>기업 개요</p>
                <p onClick={()=> setParent(1)}>대표자의말</p>
                <p onClick={()=> setParent(2)}>조직도</p>
                <p onClick={()=> setParent(3)}>오시는길</p>
            </div>
            <div id="selecteBar">
                <div id="bar" className="bar">

                </div>

            </div>
        </div>
    )


}

export default CompanyOverviewSelect;