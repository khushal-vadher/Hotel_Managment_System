import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {

    const nav = useNavigate();
    const CustomerEmail = localStorage.getItem("email")
    var isAdmin = false
    if(CustomerEmail === "kd1510@gmail.com"){
        isAdmin = true;
    }
    const handleLogout = () =>{
        localStorage.removeItem("email")
        localStorage.removeItem("ID")
        nav("/")
    }
    
    return (

        <>
            <div className="tm-header">
                <div className="container">
                    <div className="col">
                        <div className="col-lg-3 col-md-2 col-sm-3 tm-site-name-container">
                            {/* <Link to={<Header/>} className="tm-site-name">HOTELTONIGHT</Link> */}
                            <a href="/" className="tm-site-name">HotelToNight</a>
                        </div>
                        <div className="row-lg-2 row-md-2 row-sm-2">
                            <div className="mobile-menu-icon">
                                <i className="fa fa-bars"></i>
                            </div>
                            <nav className="tm-nav">
                                <ul>
                                   
                                    
                                    {!isAdmin && <li><a href='/'>Home</a></li>}
                                    {CustomerEmail && <li><NavLink to="/update">Update</NavLink></li>}
                                    {isAdmin && <li><NavLink to="/room">Rooms</NavLink></li>}
                                    {isAdmin && <li><NavLink to="/roomtype">Room Type</NavLink></li>}
                                    {isAdmin && <li><NavLink to="/booking">Bookings </NavLink></li>}
                                    {isAdmin && <li><NavLink to="/customer">Customers</NavLink></li>}

                                    
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