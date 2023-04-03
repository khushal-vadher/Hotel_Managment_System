import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import Header from '../Header/Header';
import './roomtype.css'
function Roomtype() {

    const [data, setData] = useState([]);
    const [roomtype, setRoomtype] = useState({
        type: Boolean
    })
    const [roomtypedelete, setRoomtypedelete] = useState({
        type: ""
    })
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        const getBooking = async () => {
            try {
                await axios.get("http://localhost:24813/api/RoomTypes").then((res) => { setData(res.data) })
            } catch (err) {
                console.log(err)
            }
        }
        getBooking();

    }, [reducer])
    console.log("Room")
    console.log(data)
    const onchangevalue = (e) => {
        e.preventDefault();
        setRoomtype({ ...roomtype, [e.target.name]: e.target.value });
        console.log(roomtype)
    }

    const handleAdd =async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:24813/api/RoomTypes/",roomtype).then((res)=>{console.log(res.data)})
            setReducer()
        }catch(err){
            console.log(err)
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault();

        console.log(roomtype)
        try {
            await axios.put(`http://localhost:24813/api/RoomTypes/${roomtype.roomTypeId}`, roomtype)
            setReducer()
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`http://localhost:24813/api/RoomTypes/${roomtypedelete.roomTypeId}`)
            setReducer()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Header />


            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Roomtype</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addRoomtype" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Roomtype</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>

                                </tr>
                            </thead>
                            <tbody>

                                {data.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.roomTypeId}</td>
                                        <td>{obj.type}</td>
                                        <td>
                                            <a href="#editEmployeeModal" onClick={() => { setRoomtype(obj) }} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" onClick={() => { setRoomtypedelete(obj) }}>&#xE872;</i></a>
                                        </td>


                                    </tr>
                                ))
                                }                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            {/* addEmployeeModal */}
            <div id="addRoomtype" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Roomtype</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required value={roomtype.type} name="type" onChange={(e)=>{onchangevalue(e)}}/>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" onClick={(e)=>{handleAdd(e)}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Roomtype</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" defaultValue={roomtype.type} onChange={(e) => onchangevalue(e)} name="type" required />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" onClick={handleUpdate} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Delete Modal HTML --> */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Roomtype</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" onClick={(e) => { handleDelete(e) }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Roomtype;