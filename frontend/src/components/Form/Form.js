import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const nav = useNavigate()
    const [submit,setSubmit] = useReducer(x =>x+ 1 ,0)

    const id = localStorage.getItem("ID")
    const [booking, setBooking] = useState({
        BookId: 0,
        CheackIn: "",
        CheackOut: "",
        RoomId: 0,
        CustomerId: id,
        guests :5,
        roomType:""

    });

    const [room, setRoom] = useState([]); //RoomID
    const [roomType, setRoomType] = useState([])



    useEffect(() => {
        axios.get('http://localhost:24813/api/Rooms')
            .then((response) => {
                // console.log(response.data)
                setRoom(response.data);
            })

    }, [])
    console.log(room)

    useEffect(() => {
        axios.get('http://localhost:24813/api/Roomtypes')
            .then((response) => {
                // console.log(response.data)
                setRoomType(response.data);
            })

    }, [])


    console.log(roomType)

    const handleChange = ({ currentTarget: select }) => {
		setBooking({ ...booking, [select.name]: select.value });
	};
    const handleChangeinput = ({ currentTarget: input }) => {
		setBooking({ ...booking, [input.name]: input.value });
	};
   
    // setBooking({...booking,CustomerId :id})
    console.log(booking)

    const handleSubmit = async(eve) =>{
        eve.preventDefault()
        try{
            const res = await axios.post("http://localhost:24813/api/Bookings",booking)
            const roomId = booking.RoomId;
            const obj = {
                RoomId : roomId,
                available :false
            }
            const response = await axios.put(`http://localhost:24813/api/Rooms/${roomId}`,obj)
            setBooking([])
            setSubmit()
        }catch(err){
            console.log(err)
        }

    }

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
                                                <input type='date' className="form-control" placeholder="Check-in Date" onChange={handleChangeinput}  value={booking.CheackIn} name="CheackIn"/>
                                                <span className="input-group-addon">
                                                </span>
                                            </div>
                                        </div>
                                        {/* <input onChange={handleChange}  */}
                                        <div className="form-group">
                                            <div className='input-group date' id='datetimepicker2'>
                                                <input type='date' className="form-control" placeholder="Check-out Date" onChange={handleChangeinput}  value={booking.CheackOut} name="CheackOut" />
                                                <span className="input-group-addon">
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group margin-bottom-0">
                                            <select className="form-control" onChange={handleChange} value={booking.guests} name="guests">
                                                <option value="">No of Guests  </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        {/* ------------------------------------------------------------------------------------ */}
                                        <div className="form-group margin-bottom-0"> 
                                            <select className="form-control" onChange={handleChange} value={booking.roomType} name="roomType"> {
                                                roomType.map((obj, index) => (
                                                    <option value={obj.type}  >{obj.type}</option>
                                                ))
                                            }

                                            </select>
                                        </div>


                                        <div className="form-group margin-bottom-0">
                                            <select className="form-control" onChange={handleChange} value={booking.RoomId} name="RoomId">

                                                {room.map((obj, index) => (
                                                    <>
                                                   {obj.available &&  <option value={obj.id} >{obj.roomId}</option>}
                                                    </>

                                                ))}
                                            </select>

                                        </div>

                                        <div className="form-group tm-yellow-gradient-bg text-center">
                                            <button type="submit" name="submit" onClick={(eve)=>{handleSubmit(eve)}} className="tm-yellow-btn">Book Now</button>
                                        </div>
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