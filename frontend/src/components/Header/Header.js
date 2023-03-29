import React from 'react';
import Banner from '../Banner/Banner.js';
import Contactus from '../Contact/Contactus.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';
import { Link } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {

    const nav = useNavigate("");
    const CustomerEmail = localStorage.getItem("email")
    const handleLogout = () =>{
        localStorage.removeItem("email")
        localStorage.removeItem("ID")
        nav("/")
    }
    
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
                                   
                                    
                                    <li><a href='/'>Home</a></li>
                                    <li><NavLink to="/update">Update</NavLink></li>
                                    
                                    {!CustomerEmail && <li><NavLink to="/login" >Login</NavLink></li>}
                                    {CustomerEmail && <li><NavLink  onClick={handleLogout} >Logout</NavLink></li>}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default Header;