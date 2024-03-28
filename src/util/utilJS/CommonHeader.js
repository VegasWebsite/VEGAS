import React from "react";
import "../utilCSS/commonHeader.css"
import imgLog from "../utilIMG/vegasLogo.svg"
import { Link } from "react-router-dom";


function CommonHeader(){

    return(
        
        <div id="commonHeader">

            <div id="commonHeaderLogo">
                <img src={imgLog}></img>
            </div>

            <div id="commonHeaderMenu">

                <Link to="/company" style={{ textDecoration: "none", color: "#000000"}}>
                    <p>Company</p>
                </Link>

                <Link to="/validation" >
                    <p>Validation</p>
                </Link>

                <Link to="/automation">
                    <p>Automation</p>
                </Link>

                <Link to="/contact">
                    <p>Contact</p>
                </Link>
            </div>


        </div>
    )

}
export default CommonHeader;