import React from 'react';
import imgbanner1 from "./banner1.jpg";
import imgbanner2 from "./banner2.jpg";
import imgbanner3 from "./banner3.jpg";
function Banner() {
    return (
        <div  className='tm-gray-bg'>
            <section className="tm-banner">
                <div className="flexslider flexslider-banner">
                    <ul className="slides">
                        <li>
                            <div className="tm-banner-inner">
                                <h1 className="tm-banner-title">Find <span className="tm-yellow-text">The Best</span> Place</h1>
                                <p className="tm-banner-subtitle">For Your Night</p>
                                <a href="#more" className="tm-banner-link">Learn More</a>
                            </div>
                            <img src={imgbanner1} />
                        </li>
                        <li>
                            <div className="tm-banner-inner">
                                <h1 className="tm-banner-title"> <span className="tm-yellow-text">King</span> And <span className="tm-yellow-text">Queen</span></h1>
                                <p className="tm-banner-subtitle">Rooms For Your Night</p>
                                <a href="#more" className="tm-banner-link">Learn More</a>
                            </div>
                            <img src={imgbanner2} />            
                        </li>
                        <li>
                            <div className="tm-banner-inner">
                                <h1 className="tm-banner-title">Proin <span className="tm-yellow-text">Gravida</span> Nibhvell</h1>
                                <p className="tm-banner-subtitle">Velit Auctor</p>
                                <a href="#more" className="tm-banner-link">Learn More</a>
                            </div>
                            <img src={imgbanner3} />
                        </li>
                    </ul>
                </div>
            </section>
           

           
        </div>
    );
}

export default Banner;