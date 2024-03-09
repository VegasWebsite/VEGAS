import React from "react";
import MainBanner from "./MainBanner";
import MainHeader from "./MainHeader";
import "../mainPageCSS/mainPage.css"
import CommonFooter from "../../util/utilJS/CommonFooter";

function MainPage(){
    return(
        <div id="mainPage">
            <div  id="mainHeader">
                <MainHeader/>
            </div>
            <div  id="mainBanner">
                <MainBanner/>
            </div>
            <div id="mainFooter">
                <CommonFooter/>
            </div>
            
            
        </div>
    )
}

export default MainPage;