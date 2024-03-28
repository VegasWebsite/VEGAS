import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage/mainPageJS/MainPage";

import AutomationPage from "./automationPage/automationPageJS/AutomationPage";
import CompanyPage from "./companyPage/companyPageJS/CompanyPage";
import ValidationPage from "./validationPage/validationJS/ValidationPage";
import ContactPage from "./contactPage/contactJS/ContactPage";

function UserRouter(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/company" element={<CompanyPage/>}/>
            <Route path="/automation" element={<AutomationPage/>}/>
            <Route path="/validation" element={<ValidationPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    )

}

export default UserRouter;