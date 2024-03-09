import React from "react";
import "../companyPageCSS/companyHeader.css"
import imgLog from "../../util/utilIMG/vegasLogo.svg"
import { Link } from "react-router-dom";


function CompanyHeader(){

    const linkMain = () => {
        window.location.href = "/";

    }
    return(
        
        <div id="companyHeaderContiner">

            <div id="companyHeaderLogo">
                <img src={imgLog} onClick={linkMain}></img>
            </div>

            <div id="companyHeaderMenu">

                <Link to="/companyPage" style={{ textDecoration: "none", color: "blue", fontFamily : "poppins"}}>
                    <p>Company</p>
                </Link>

                <Link to="/validationPage" style={{ textDecoration: "none", color: "#000000", fontFamily : "poppins"}}>
                    <p>Validation</p>
                </Link>

                <Link to="/automationPage" style={{ textDecoration: "none", color: "#000000", fontFamily : "poppins"}}>
                    <p>Automation</p>
                </Link>

                <Link to="/contactPage" style={{ textDecoration: "none", color: "#000000",  fontFamily : "poppins"}}>
                    <p>Contact</p>
                </Link>
            </div>


        </div>
    )

}
export default CompanyHeader;