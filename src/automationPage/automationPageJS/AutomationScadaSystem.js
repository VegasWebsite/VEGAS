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
import BuleOpen from "../automationPageIMG/BlueOpen.svg"
import BuleOpen1 from "../automationPageIMG/BlueOpen1.png"
import BuleOpen2 from "../automationPageIMG/BlueOpen2.png"
import BuleOpen3 from "../automationPageIMG/BlueOpen3.png"
import BuleOpen4 from "../automationPageIMG/BlueOpen4.png"
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

function AutomationScadaSystem() {

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

    const goLink = () => {
        window.location.href = "https://grmetal.co.kr/";
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 4100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4100,
        centerPadding: '0px'

    };

    const settings3 = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
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

                        // TODO : 슬라이딩 맞추고 세번째 소제목 수정해서 올리기
                        <div>
                            <img src={BuleOpen} />
                            <div>
                                <Slider {...settings3}>
                                    <img src={BuleOpen1} className="silderimg2" />
                                    <img src={BuleOpen2} className="silderimg2" />
                                    <img src={BuleOpen3} className="silderimg2" />
                                    <img src={BuleOpen4} className="silderimg2" />
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
                            <img src={BuleOpen} />
                            <div>
                                <Slider {...settings3}>
                                    <img src={BuleOpen1} className="silderimg2" />
                                    <img src={BuleOpen2} className="silderimg2" />
                                    <img src={BuleOpen3} className="silderimg2" />
                                    <img src={BuleOpen4} className="silderimg2" />
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