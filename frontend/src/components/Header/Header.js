import React from 'react';
import Banner from '../Banner/Banner.js';
import Contactus from '../Contact/Contactus.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';
import {Link} from 'react';

function Header() {
    return (

        <>
            <div className="tm-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-4 col-sm-3 tm-site-name-container">
                            {/* <Link to={<Header/>} className="tm-site-name">HOTELTONIGHT</Link> */}
                            <a href="#" className="tm-site-name">HotelToNight</a>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-9">
                            <div className="mobile-menu-icon">
                                <i className="fa fa-bars"></i>
                            </div>
                            <nav className="tm-nav">
                                <ul>
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="tours.html">Our Tours</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <Form />
            <Contactus />
            <Footer />
            
        </>

    );
}

export default Header;