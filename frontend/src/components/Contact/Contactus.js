import React from 'react';
import contact from './contact.jpg'

function Contactus(props) {
    return (
        <div>
            <section className="section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="tm-section-header section-margin-top">
                            <div className="col-lg-4 col-md-3 col-sm-3"><hr /></div>
                            <div className="col-lg-4 col-md-6 col-sm-6"><h2 className="tm-section-title">Contact Us</h2></div>
                            <div className="col-lg-4 col-md-3 col-sm-3"><hr /></div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <form action="#" method="post" className="tm-contact-form">
                            <div className="col-lg-6 col-md-6">
                                <div>
                                    <img src={contact} />
                                </div>
                                <div className="contact-social">
                                    <a href="#" className="tm-social-icon tm-social-facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="tm-social-icon tm-social-dribbble"><i className="fa fa-dribbble"></i></a>
                                    <a href="#" className="tm-social-icon tm-social-twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="tm-social-icon tm-social-instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" className="tm-social-icon tm-social-google-plus"><i className="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 tm-contact-form-input">
                                <div className="form-group">
                                    <input type="text" id="contact_name" className="form-control" placeholder="NAME" />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="contact_email" className="form-control" placeholder="EMAIL" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="contact_subject" className="form-control" placeholder="SUBJECT" />
                                </div>
                                <div className="form-group">
                                    <textarea id="contact_message" className="form-control" rows="6" placeholder="MESSAGE"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="tm-submit-btn" type="submit" name="submit">Submit now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contactus;