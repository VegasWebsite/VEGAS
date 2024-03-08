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
            <Route path="/companyPage" element={<CompanyPage/>}/>
            <Route path="/automationPage" element={<AutomationPage/>}/>
            <Route path="/validationPage" element={<ValidationPage/>}/>
            <Route path="/contactPage" element={<ContactPage/>}/>
        </Routes>
    )

}

export default UserRouter;