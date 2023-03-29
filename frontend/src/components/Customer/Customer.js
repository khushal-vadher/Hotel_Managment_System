import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './customer.css'
function Customer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getBooking = async () => {
            try {
                await axios.get("http://localhost:24813/api/Customers").then((res) => { setData(res.data) })
            } catch (err) {
                console.log(err)
            }
        }
        getBooking();

    }, [])
    console.log("Room")
    console.log(data)


    return (
        <div>
            <Header />
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>All  <b>Customer</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <div className="search-box">
                                        <div className="input-group">
                                            <input type="text" id="search" className="form-control" placeholder="Search by Name" />
                                            <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer ID</th>
                                    <th>Name</th>


                                </tr>
                            </thead>
                            <tbody>
                                {data.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.custId}</td>
                                        <td>{obj.customerName}</td>
                                        <td>{obj.customerEmail}</td>
                                        <td>{obj.customerAddress}</td>
                                    </tr>
                                ))
                                }




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;