import React, { useState, useEffect } from "react";
import Slider from "react-slick";


import "../automationPageCSS/automationScadaSystem.css"
import ScadaSystem1 from "../automationPageIMG/scadaSystem1.png"
import ScadaSystem2 from "../automationPageIMG/scadaSystem2.png"
import ScadaSystem3 from "../automationPageIMG/scadaSystem3.png"
import ScadaSystem4 from "../automationPageIMG/scadaSystem4.png"
import ScadaSystem5 from "../automationPageIMG/scadaSystem5.png"
import ScadaSystem6 from "../automationPageIMG/scadaSystem6.png"
import ScadaSystem7 from "../automationPageIMG/scadaSystem7.png"
import SiemensWincc from "../automationPageIMG/siemensWincc.svg"
import SiemensWincc1 from "../automationPageIMG/siemensWincc1.png"
import SiemensWincc2 from "../automationPageIMG/siemensWincc2.png"
import SiemensWincc3 from "../automationPageIMG/siemensWincc3.png"
import SiemensWincc4 from "../automationPageIMG/siemensWincc4.png"
import Scheniderintouch from "../automationPageIMG/schneiderIntouch.svg"
import Scheniderintouch1 from "../automationPageIMG/schneiderIntouch1.png"
import Scheniderintouch2 from "../automationPageIMG/schneiderIntouch2.png"
import Scheniderintouch3 from "../automationPageIMG/schneiderIntouch3.png"
import Scheniderintouch4 from "../automationPageIMG/schneiderIntouch4.png"
import BlueOpen from "../automationPageIMG/BlueOpen.svg"
import BlueOpen1 from "../automationPageIMG/BlueOpen1.png"
import BlueOpen2 from "../automationPageIMG/BlueOpen2.png"
import BlueOpen3 from "../automationPageIMG/BlueOpen3.png"
import BlueOpen4 from "../automationPageIMG/BlueOpen4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MScadaSystem1 from "../automationPageIMG/mobileIMG/mScadaSystem1.svg"
import MScadaSystem1_1 from "../automationPageIMG/mobileIMG/mScadaSystem1-1.png"
import MScadaSystem2 from "../automationPageIMG/mobileIMG/mScadaSystem2.svg"
import MScadaSystem3 from "../automationPageIMG/mobileIMG/mScadaSystem3.png"
import MScadaSystem4 from "../automationPageIMG/mobileIMG/mScadaSystem4.png"
import MScadaSystem5 from "../automationPageIMG/mobileIMG/mScadaSystem5.png"
import MScadaSystem6 from "../automationPageIMG/mobileIMG/mScadaSystem6.png"
import MScadaSystem7 from "../automationPageIMG/mobileIMG/mScadaSystem7.png"
import MSiemensWincc from "../automationPageIMG/mobileIMG/mSiemensWincc.svg"
import MScheniderintouch from "../automationPageIMG/mobileIMG/mSchneiderIntouch.svg"
import MBlueOpen from "../automationPageIMG/mobileIMG/mBlueOpen.svg"

function AutomationScadaSystem() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
    const [show , setShow] = useState(4);
    const [show2 , setShow2] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            setScreenWidth(newWidth);
            if(newWidth<=900){
                setShow(2);
                setShow2(2);
            }else{
                setShow(4);
                setShow2(3);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const goLink = () => {
        window.location.href = "https://grmetal.co.kr/";
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 4100,
        slidesToShow: show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4100,
        centerPadding: '0px'

    };

    const settings3 = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: show2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


    };


    return (
        <div className="automationScadaSystem">

            {(screenWidth <= 900) ? (
                <>
                    <img src={MScadaSystem1} loading="lazy" />
                    <img src={MScadaSystem1_1} loading="lazy" />
                    <img src={MScadaSystem2} loading="lazy" />
                    <img src={MScadaSystem3} loading="lazy" />
                    <img src={MScadaSystem4} loading="lazy" />
                    <img src={MScadaSystem5} loading="lazy" />
                    <img src={MScadaSystem6} loading="lazy" />

                    <div className="slider">
                        <div>
                            <img src={MSiemensWincc} />
                            <div>
                                <Slider {...settings}>
                                    <img src={SiemensWincc1} className="silderimg" />
                                    <img src={SiemensWincc2} className="silderimg" />
                                    <img src={SiemensWincc3} className="silderimg" />
                                    <img src={SiemensWincc4} className="silderimg" />
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <img src={MScheniderintouch} />
                            <div>
                                <Slider {...settings2}>
                                    <img src={Scheniderintouch1} className="silderimg" />
                                    <img src={Scheniderintouch2} className="silderimg" />
                                    <img src={Scheniderintouch3} className="silderimg" />
                                    <img src={Scheniderintouch4} className="silderimg" />
                                </Slider>
                            </div>
                        </div>

                       
                        <div>
                            <img src={MBlueOpen} />
                            <div>
                                <Slider {...settings3}>
                                    <img src={BlueOpen1} className="silderimg2" />
                                    <img src={BlueOpen2} className="silderimg2" />
                                    <img src={BlueOpen3} className="silderimg2" />
                                    <img src={BlueOpen4} className="silderimg2" />
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <img src={MScadaSystem7} loading="lazy" />
                </>
            ) : (
                <>
                    <img src={ScadaSystem1} loading="lazy" />
                    <img src={ScadaSystem2} loading="lazy" />
                    <img src={ScadaSystem3} loading="lazy" />
                    <img src={ScadaSystem4} loading="lazy" />
                    <img src={ScadaSystem5} loading="lazy" />
                    <img src={ScadaSystem6} loading="lazy" />

                    <div className="slider">
                        <div>
                            <img src={SiemensWincc} />
                            <div>
                                <Slider {...settings}>
                                    <img src={SiemensWincc1} className="silderimg" />
                                    <img src={SiemensWincc2} className="silderimg" />
                                    <img src={SiemensWincc3} className="silderimg" />
                                    <img src={SiemensWincc4} className="silderimg" />
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <img src={Scheniderintouch} />
                            <div>
                                <Slider {...settings2}>
                                    <img src={Scheniderintouch1} className="silderimg" />
                                    <img src={Scheniderintouch2} className="silderimg" />
                                    <img src={Scheniderintouch3} className="silderimg" />
                                    <img src={Scheniderintouch4} className="silderimg" />
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <img src={BlueOpen} />
                            <div>
                                <Slider {...settings3}>
                                    <img src={BlueOpen1} className="silderimg2" />
                                    <img src={BlueOpen2} className="silderimg2" />
                                    <img src={BlueOpen3} className="silderimg2" />
                                    <img src={BlueOpen4} className="silderimg2" />
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <img src={ScadaSystem7} loading="lazy" />
                </>
            )}


        </div>
    )
}

export default AutomationScadaSystem;