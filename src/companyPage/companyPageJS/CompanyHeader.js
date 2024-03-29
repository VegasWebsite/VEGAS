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
                <img src={imgLog} onClick={linkMain} loading="lazy"></img>
            </div>

            <div id="companyHeaderMenu">

                <Link to="/company" style={{ textDecoration: "none", color: "blue", fontFamily : "poppins" }}>
                    <p>Company</p>
                </Link>

                <Link to="/validation" style={{ textDecoration: "none", color: "#000000"}}>
                    <p className="poppins-light">Validation</p>
                </Link>

                <Link to="/automation" style={{ textDecoration: "none", color: "#000000"}}>
                    <p className="poppins-light">Automation</p>
                </Link>

                <Link to="/contact" style={{ textDecoration: "none", color: "#000000"}}>
                    <p className="poppins-light">Contact</p>
                </Link>
            </div>


        </div>
    )

}
export default CompanyHeader;