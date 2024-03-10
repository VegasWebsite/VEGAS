import React from "react";
import imgLog from "../mainPageIMG/headerlogo.svg";
import "../mainPageCSS/mainPageHeader.css"
import { Link } from "react-router-dom";


function MainHeader(){

    return(
        <div id="mainPageHeader">

            <div id="mainPageHeaderLogo">
                <img src={imgLog}></img>
            </div>

            <div id="mainPageHeaderMenu">

                <Link to="/companyPage" style={{ textDecoration: "none", color: "#ffffff", fontFamily : "poppins"}}>
                    <p>Company</p>
                </Link>

                <Link to="/validationPage" style={{ textDecoration: "none", color: "#ffffff", fontFamily : "poppins"}}>
                    <p>Validation</p>
                </Link>

                <Link to="/automationPage" style={{ textDecoration: "none", color: "#ffffff", fontFamily : "poppins"}}>
                    <p>Automation</p>
                </Link>

                <Link to="/contactPage" style={{ textDecoration: "none", color: "#ffffff", fontFamily : "poppins"}}>
                    <p>Contact</p>
                </Link>
            </div>


        </div>
    )

}
export default MainHeader;