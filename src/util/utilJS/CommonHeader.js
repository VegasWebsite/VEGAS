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

                <Link to="/companyPage">
                    <p>Company</p>
                </Link>

                <Link to="/validationPage">
                    <p>Validation</p>
                </Link>

                <Link to="/automationPage">
                    <p>Automation</p>
                </Link>

                <Link to="/contactPage">
                    <p>Contact</p>
                </Link>
            </div>


        </div>
    )

}
export default CommonHeader;