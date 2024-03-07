import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage/mainPageJS/MainPage";



function UserRouter(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )

}

export default UserRouter;