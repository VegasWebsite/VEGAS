import React, { useEffect }  from "react";
import ContactBody1 from "../contactIMG/contactBody1.png";
import ContactBody3 from "../contactIMG/contactBody3.png";
import CallBox from "../contactIMG/callBox.svg";
import MailBox from "../contactIMG/mailBox.svg";
import "../contactCSS/contactBody.css";


function ContactUs() {

    useEffect(()=>{
        let callNum = document.getElementById("callNumber");
        let mail = document.getElementById("mail");

        callNum.addEventListener('click',() =>{
            window.navigator.clipboard.writeText(callNum.textContent);
        })
        mail.addEventListener('click',() =>{
            window.navigator.clipboard.writeText(mail.textContent);
        })



    },[])
    
   
    return(
        <div id="body">
            <img src={ContactBody1}/>

            <div className="contactNumber">
                <div>
                    <img src={CallBox}/>
                    <p id="callNumber">031-620-5949</p>
                </div>
                <div>
                    <img src={MailBox}/>
                    <p id="mail">info@vegasinc.co.kr</p>
                </div>
            </div>

            <img src={ContactBody3}/>
        </div>
    )
}

export default ContactUs;