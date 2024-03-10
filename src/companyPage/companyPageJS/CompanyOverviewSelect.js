import React, { useState } from "react";
import "../companyPageCSS/companyOverviewSelect.css";
function CompanyOverviewSelect(props){

    const setParent = (v) => {
        props.onData(v);
    }

    return(
        <div id="comPanyOverviewSelect">
            <p onClick={()=> setParent(0)}>기업 개요</p>
            <p onClick={()=> setParent(1)}>대표자의말</p>
            <p onClick={()=> setParent(2)}>조직도</p>
            <p onClick={()=> setParent(3)}>오시는길</p>
        </div>
    )


}

export default CompanyOverviewSelect;