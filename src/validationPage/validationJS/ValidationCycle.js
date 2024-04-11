import React, { useState, useEffect } from "react";


import CycleDevelopment1 from "../validationIMG/cycleDevelopment1.png";
import CycleDevelopment2 from "../validationIMG/cycleDevelopment2.png";
import CycleDevelopment3 from "../validationIMG/cycleDevelopment3.png";
import CycleDevelopment4 from "../validationIMG/cycleDevelopment4.png";

import MCycleDevelopment1 from "../validationIMG/mobileIMG/mCycleDevelopment1.svg";
import MCycleDevelopment2 from "../validationIMG/mobileIMG/mCycleDevelopment2.svg";
import MCycleDevelopment3 from "../validationIMG/mobileIMG/mCycleDevelopment3.svg";
import MCycleDevelopment4 from "../validationIMG/mobileIMG/mCycleDevelopment4.svg";

import VHP1 from "../validationIMG/VHP1.svg";
import VHP2 from "../validationIMG/VHP2.svg";
import ToggleS1 from "../validationIMG/toggleS1.svg";
import ToggleS1Act from "../validationIMG/toggleS1Act.svg";
import ToggleS1Content1 from "../validationIMG/toggleS1Content1.png";
import ToggleS1Content2 from "../validationIMG/toggleS1Content2.png";
import ToggleS2 from "../validationIMG/toggleS2.svg";
import ToggleS2Act from "../validationIMG/toggleS2Act.svg"
import ToggleS2Content from "../validationIMG/toggleS2Content.png";
import ToggleS3 from "../validationIMG/toggleS3.svg";
import ToggleS3Act from "../validationIMG/toggleS3Act.svg"
import ToggleS3Content from "../validationIMG/toggleS3Content.png";
import ToggleS4 from "../validationIMG/toggleS4.svg";
import ToggleS4Act from "../validationIMG/toggleS4Act.svg"
import ToggleS4Content from "../validationIMG/toggleS4Content.png";

import MToggleS1 from "../validationIMG/mobileIMG/mToggleS1.svg";
import MToggleS1Act from "../validationIMG/mobileIMG/mToggleS1Act.svg";
import MToggleS1Content from "../validationIMG/mobileIMG/mToggleS1Content.png";
import MToggleS2 from "../validationIMG/mobileIMG/mToggleS2.svg";
import MToggleS2Act from "../validationIMG/mobileIMG/mToggleS2Act.svg";
import MToggleS2Content from "../validationIMG/mobileIMG/mToggleS2Content.png";
import MToggleS3 from "../validationIMG/mobileIMG/mToggleS3.svg";
import MToggleS3Act from "../validationIMG/mobileIMG/mToggleS3Act.svg";
import MToggleS3Content from "../validationIMG/mobileIMG/mToggleS3Content.png";
import MToggleS4 from "../validationIMG/mobileIMG/mToggleS4.svg";
import MToggleS4Act from "../validationIMG/mobileIMG/mToggleS4Act.svg";
import MToggleS4Content from "../validationIMG/mobileIMG/mToggleS4Content.png";

import ToggleS1Video from "../validationIMG/toggleS1Video.mp4"

import "../validationCSS/validationCycleDevelopment.css";

function ValidationCycle() {

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

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const toggleS1Active = () => {
        if (active1) {
            setActive1(false);
        } else {
            setActive1(true);
        }

    };

    const toggleS2Active = () => {
        if (active2) {
            setActive2(false);
        } else {
            setActive2(true);
        }

    };

    const toggleS3Active = () => {
        if (active3) {
            setActive3(false);
        } else {
            setActive3(true);
        }

    };


    const toggleS4Active = () => {
        if (active4) {
            setActive4(false);
        } else {
            setActive4(true);
        }

    };




    return (
        <div className="validationCycleDevelopment">

            {(screenWidth <= 900) ? (
                <>
                    <img src={MCycleDevelopment1} loading="lazy" />

                    <img src={MCycleDevelopment2} loading="lazy" />
                   
                    <div className="VHPImages">
                        <img src={VHP1} />
                        <img src={VHP2} />
                    </div>

                    <img src={MCycleDevelopment3} loading="lazy" />

                    <img src={MCycleDevelopment4} loading="lazy" />
                    <div className="MToggle">
                        {
                            !active1 ? <div className="MDisable">
                                <img src={MToggleS1} onClick={toggleS1Active} />

                            </div>
                                :
                                <div className="MAcctive">
                                    <img src={MToggleS1Act} onClick={toggleS1Active} />

                                </div>

                        }
                        <div className="mToggleVideo">
                            <img src={MToggleS1Content} />
                            <video muted autoPlay loop playsInline>
                                <source src={ToggleS1Video} type="video/mp4"/>
                            </video>
                        </div>
                        {
                            !active2 ? <div className="MDisable">
                                <img src={MToggleS2} onClick={toggleS2Active} />

                            </div>
                                :
                                <div className="MAcctive">
                                    <img src={MToggleS2Act} onClick={toggleS2Active} />


                                </div>

                        }
                        <img src={MToggleS2Content} />
                        {
                            !active3 ? <div className="MDisable">
                                <img src={MToggleS3} onClick={toggleS3Active} />

                            </div> :
                                <div className="MAcctive">
                                    <img src={MToggleS3Act} onClick={toggleS3Active} />

                                </div>

                        }
                        <img src={MToggleS3Content} />
                        {
                            !active4 ? <div className="MDisable">
                                <img src={MToggleS4} onClick={toggleS4Active} />

                            </div>
                                :
                                <div className="MAcctive">
                                    <img src={MToggleS4Act} onClick={toggleS4Active} />
                                </div>

                        }
                        <img src={MToggleS4Content} />
                    </div>

                </>
            ) : (
                <>
                    <img src={CycleDevelopment1} loading="lazy" />

                    <img src={CycleDevelopment2} loading="lazy" />
                    <div className="VHPImages">
                        <img src={VHP1} />
                        <img src={VHP2} />
                    </div>

                    <img src={CycleDevelopment3} loading="lazy" />

                    <img src={CycleDevelopment4} loading="lazy" />
                    <div className="toggle">
                        {
                            !active1 ? <div className="disable">
                                <img src={ToggleS1} onClick={toggleS1Active} />

                            </div>
                                :
                                <div className="acctive">
                                    <img src={ToggleS1Act} onClick={toggleS1Active} />

                                </div>

                        }
                        <div className="toggleVideo">
                            <img src={ToggleS1Content1} className="s11"/>
                            <img src={ToggleS1Content2} className="s12"/>
                            <video muted autoPlay loop playsInline>
                                <source src={ToggleS1Video} type="video/mp4" />
                            </video>
                        </div>
                        {
                            !active2 ? <div className="disable">
                                <img src={ToggleS2} onClick={toggleS2Active} />

                            </div>
                                :
                                <div className="acctive">
                                    <img src={ToggleS2Act} onClick={toggleS2Active} />
                                </div>

                        }
                        <img src={ToggleS2Content} />
                        {
                            !active3 ? <div className="disable">
                                <img src={ToggleS3} onClick={toggleS3Active} />

                            </div> :
                                <div className="acctive">
                                    <img src={ToggleS3Act} onClick={toggleS3Active} />

                                </div>

                        }
                        <img src={ToggleS3Content} />
                        {
                            !active4 ? <div className="disable">
                                <img src={ToggleS4} onClick={toggleS4Active} />

                            </div>
                                :
                                <div className="acctive">
                                    <img src={ToggleS4Act} onClick={toggleS4Active} />
                                </div>

                        }
                        <img src={ToggleS4Content} />
                    </div>
                </>
            )}




        </div>
    )

}
export default ValidationCycle;