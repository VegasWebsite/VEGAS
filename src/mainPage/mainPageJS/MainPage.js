import React from "react";
import MainBanner from "./MainBanner";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import "../mainPageCSS/mainPage.css"

function MainPage(){
    return(
        <div id="mainPage">
            <div  id="mainHeader">
                <MainHeader/>
            </div>
            <div  id="mainBanner">
                <MainBanner/>
            </div>
            <div  id="mainFooter">
                <MainFooter />
            </div>
            
            
        </div>
    )
}

export default MainPage;