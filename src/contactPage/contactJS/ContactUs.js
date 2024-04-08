import React, { useState, useEffect } from "react";

import ContactBody1 from "../contactIMG/contactBody1.png";
import ContactBody3 from "../contactIMG/contactBody3.png";
import CallBox from "../contactIMG/callBox.svg";
import MailBox from "../contactIMG/mailBox.svg";
import "../contactCSS/contactBody.css";

import MContactBody1 from "../contactIMG/mobileIMG/mContactBody1.svg";
import MContactBody3 from "../contactIMG/mobileIMG/mContactBody3.svg";


function ContactUs() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        let callNum = document.getElementById("callNumber");
        let mail = document.getElementById("mail");

        callNum.addEventListener('click', () => {
            window.navigator.clipboard.writeText(callNum.textContent);
            alert("복사되었습니다.");
        })
        mail.addEventListener('click', () => {
            window.navigator.clipboard.writeText(mail.textContent);
            alert("복사되었습니다.");
        })
    }, [])


    return (
        <div id="body">
            {(screenWidth <= 900) ? (
                <>
                    <img src={MContactBody1} />

                    <div className="mContactNumber">
                        <div id="callNumber">
                            <img src={CallBox} />
                            <p>031-620-5949</p>
                        </div>
                        <div id="mail">
                            <img src={MailBox} />
                            <p>info@vegasinc.co.kr</p>
                        </div>
                    </div>

                    <img src={MContactBody3} />
                </>
            ) : (
                <>
                    <img src={ContactBody1} />

                    <div className="contactNumber">
                        <div id="callNumber">
                            <img src={CallBox} />
                            <p>031-620-5949</p>
                        </div>
                        <div id="mail">
                            <img src={MailBox} />
                            <p>info@vegasinc.co.kr</p>
                        </div>
                    </div>

                    <img src={ContactBody3} />
                </>
            )}

        </div>
    )
}

export default ContactUs;