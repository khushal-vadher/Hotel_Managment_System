import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import Header from '../Header/Header';
import './roomtype.css'
function Roomtype() {

    const [data, setData] = useState([]);
    const [roomtype,setRoomtype] = useState({
        type:""
    })
    const [roomtypedelete,setRoomtypedelete] = useState({
        type:""
    })
    const [reducer,setReducer] = useReducer(x=>x+1,0)
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

    const handleDelete =async (e)=>{
        e.preventDefault()
        try{
            await axios.delete(`http://localhost:24813/api/RoomTypes/${roomtypedelete.roomTypeId}`)
            setReducer()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Header />

           
            <div class="container-xl">
                <div class="table-responsive">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2>Manage <b>Roomtype</b></h2>
                                </div>
                                <div class="col-sm-6">
                                    <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Roomtype</span></a>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="custom-checkbox">
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
                                            <a href="#editEmployeeModal" onClick={() => { setRoomtype(obj) }} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete" onClick={()=>{setRoomtypedelete(obj)}}>&#xE872;</i></a>
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
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Roomtype</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" required />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" class="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            {/* <AddTest /> */}
            <div id="editEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Roomtype</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control"  defaultValue={roomtype.type} onChange={(e) => onchangevalue(e)} name="type" required />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" class="btn btn-info" value="Save"  onClick={handleUpdate} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Delete Modal HTML --> */}
            <div id="deleteEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Roomtype</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p class="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" class="btn btn-danger" value="Delete" onClick={(e)=>{handleDelete(e)}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Roomtype;