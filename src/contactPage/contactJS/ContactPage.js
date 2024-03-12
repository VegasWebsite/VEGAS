import React from "react";
import "../contactCSS/contactPage.css"
import ConnectHeader from "./ContactHeader";
import ContectBanner from "./ContectBanner";
import ContactUs from "./ContactUs";
import CommonFooter from "../../util/utilJS/CommonFooter";
function ContactPage() {
    return (
        <div id="contactPage">
            <div id="contactHeader">
                <ConnectHeader/>
            </div>
            <div id="contactbanner">
                <ContectBanner/>
            </div>
            <div id="contactBody">
                <ContactUs/>
            </div>
            <div id="validationFooter">
                    <CommonFooter/>
            </div>
        </div>
    )
}

export default ContactPage;