import React from "react";
import "../automationPageCSS/automationPage.css"
import AutomationHeader from "./AutomationHeader";
import AutomationBanner from "./AutomationBanner";
import CommonFooter from "../../util/utilJS/CommonFooter";

function AutomationPage() {
    return (
        <div id="automationPage">
            <div id="automationHeader">
                <AutomationHeader/>
            </div>
            <div id="automationBanner">
                <AutomationBanner/>
            </div>


            <div id="validationFooter">
                    <CommonFooter/>
            </div>
        </div>
    )
}

export default AutomationPage;