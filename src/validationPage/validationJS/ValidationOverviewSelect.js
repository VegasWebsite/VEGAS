import React from "react";
import "../validationCSS/validationOverviewSelect.css";
function validationOverviewSelect(props){

    const setParent = (v) => {
        props.onData(v);
    }

    return(
        <div id="select">
            <p onClick={()=> setParent(0)}>Qualification</p>
            <p onClick={()=> setParent(1)}>Cycle Development</p>
        </div>
    )


}

export default validationOverviewSelect;