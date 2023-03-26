import React from 'react';

function Form() {
    return (
        <div>
            <section className="container tm-home-section-1" id="more">
                <div className="row">
                    <div className="col-sm-4 col-sm-4 col-sm-6"></div>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active tm-white-bg" id="hotel">
                            <div className="tm-search-box effect2">
                                <form action="#" method="post" className="hotel-search-form">
                                    <div className="tm-form-inner">

                                        <div className="form-group">
                                            <div className='input-group date' id='datetimepicker1'>
                                                <input type='text' className="form-control" placeholder="Check-in Date" />
                                                <span className="input-group-addon">
                                                    <span className="fa fa-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className='input-group date' id='datetimepicker2'>
                                                <input type='text' className="form-control" placeholder="Check-out Date" />
                                                <span className="input-group-addon">
                                                    <span className="fa fa-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group margin-bottom-0">
                                            <select className="form-control">
                                                <option value="">-- Guests -- </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5p">5+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group tm-yellow-gradient-bg text-center">
                                        <button type="submit" name="submit" className="tm-yellow-btn">Check Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Form;