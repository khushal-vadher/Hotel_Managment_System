import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import Header from '../Header/Header';
import './booking.css';
function Booking() {

    const [data, setData] = useState([]);
    const [reducer,setReducer] = useReducer(x=>x+1,0)

    useEffect(() => {
        const getBooking = async () => {
            try {
                await axios.get("http://localhost:24813/api/Bookings").then((res) => { setData(res.data) })
                // await axios.get(`http://localhost:24813/api/Customers/${}`)
            } catch (err) {
                console.log(err)
            }
        }
        getBooking();

    }, [reducer])
    console.log("Booking")
    console.log(data)

    const handleDelete =async (e,bookId,roomId)=>{
        e.preventDefault()
        try{
            await axios.delete(`http://localhost:24813/api/Bookings/${bookId}`)
            await axios.put(`http://localhost:24813/api/Rooms/${roomId}`,{
                available : true
            })
            setReducer()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Header />
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>All Room <b>Booking</b></h2>
                                </div>
                                {/* <div className="col-sm-6">
                                    <div className="search-box">
                                        <div className="input-group">
                                            <input type="text" id="search" className="form-control" placeholder="Search by Name" />
                                            <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Booking ID</th>
                                    <th>Customer ID</th>
                                    <th>Cheack In </th>
                                    <th>Cheack Out</th>
                                    <th>No of Guests</th>
                                    <th>Room Type</th>
                                    <th>Room No.</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.bookId}</td>
                                        <td>{obj.customerId}</td>
                                        <td>{obj.cheackIn.slice(0,10)}</td>
                                        <td>{obj.cheackOut.slice(0,10)}</td>
                                        <td>{obj.guests}</td>
                                        <td>{obj.roomType}</td>
                                        <td>{obj.roomId}</td>
                                        <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={(e)=>{handleDelete(e,obj.bookId,obj.roomId)}}>&#xE872;</i></a>


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

export default Booking;