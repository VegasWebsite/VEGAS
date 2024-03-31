import React from "react";
import Slider from "react-slick";


import "../automationPageCSS/automationScadaSystem.css"
import ScadaSystem1 from "../automationPageIMG/scadaSystem1.svg"
import ScadaSystem2 from "../automationPageIMG/scadaSystem2.svg"
import ScadaSystem3 from "../automationPageIMG/scadaSystem3.svg"
import ScadaSystem4 from "../automationPageIMG/scadaSystem4.svg"
import ScadaSystem5 from "../automationPageIMG/scadaSystem5.svg"
import ScadaSystem6 from "../automationPageIMG/scadaSystem6.svg"
import ScadaSystem7 from "../automationPageIMG/scadaSystem7.svg"
import SiemensWincc from "../automationPageIMG/siemensWincc.svg"
import SiemensWincc1 from "../automationPageIMG/siemensWincc1.svg"
import SiemensWincc2 from "../automationPageIMG/siemensWincc2.svg"
import SiemensWincc3 from "../automationPageIMG/siemensWincc3.svg"
import SiemensWincc4 from "../automationPageIMG/siemensWincc4.svg"
import Scheniderintouch from "../automationPageIMG/schneiderIntouch.svg"
import Scheniderintouch1 from "../automationPageIMG/schneiderIntouch1.svg"
import Scheniderintouch2 from "../automationPageIMG/schneiderIntouch2.svg"
import Scheniderintouch3 from "../automationPageIMG/schneiderIntouch3.svg"
import Scheniderintouch4 from "../automationPageIMG/schneiderIntouch4.svg"
import BuleOpen from "../automationPageIMG/BlueOpen.svg"
import BuleOpen1 from "../automationPageIMG/BlueOpen1.svg"
import BuleOpen2 from "../automationPageIMG/BlueOpen2.svg"
import BuleOpen3 from "../automationPageIMG/BlueOpen3.svg"
import BuleOpen4 from "../automationPageIMG/BlueOpen4.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutomationScadaSystem() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 4000,
        
        
      };

      const settings2 = {
        dots: false,
        infinite: true,
        speed: 4100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 4100,
        centerPadding: '0px'
        
      };

      const settings3 = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 4000,
        
        
      };
   

    return (
        <div className="automationScadaSystem">
            <img src={ScadaSystem1} loading="lazy"/>
            <img src={ScadaSystem2} loading="lazy"/>
            <img src={ScadaSystem3} loading="lazy"/>
            <img src={ScadaSystem4} loading="lazy"/>
            <img src={ScadaSystem5} loading="lazy"/>
            <img src={ScadaSystem6} loading="lazy"/>

            <div className="slider">
                <div>
                    <img src={SiemensWincc} />
                    <div>
                        <Slider {...settings}>
                            <img src={SiemensWincc1} className="silderimg"/>
                            <img src={SiemensWincc2}  className="silderimg"/>
                            <img src={SiemensWincc3}  className="silderimg"/>
                            <img src={SiemensWincc4}  className="silderimg"/>
                        </Slider>  
                    </div>
                </div>

                <div>
                    <img src={Scheniderintouch} />
                    <div>
                        <Slider {...settings2}>
                            <img src={Scheniderintouch1} className="silderimg"/>
                            <img src={Scheniderintouch2}  className="silderimg"/>
                            <img src={Scheniderintouch3}  className="silderimg"/>
                            <img src={Scheniderintouch4}  className="silderimg"/>
                        </Slider>  
                    </div>
                </div>

                <div>
                    <img src={BuleOpen} />
                    <div>
                        <Slider {...settings3}>
                            <img src={BuleOpen1} className="silderimg2"/>
                            <img src={BuleOpen2}  className="silderimg2"/>
                            <img src={BuleOpen3}  className="silderimg2"/>
                            <img src={BuleOpen4}  className="silderimg2"/>
                        </Slider>  
                    </div>
                </div>
            </div>
            
            <img src={ScadaSystem7} loading="lazy"/>
        </div>
    )
}

export default AutomationScadaSystem;