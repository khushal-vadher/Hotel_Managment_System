import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import Header from '../Header/Header';
import './room.css'
function Room() {

    const [data, setData] = useState([]);
    const [room, setRoom] = useState([]);
    const [roomdelete, setRoomtypedelete] = useState([]);
    const [reducer,setReducer] = useReducer(x=>x+1,0)
    const [roomupdate, setRoomupdate] = useState({
        available : Boolean
    })

    useEffect(() => {
        const getRoom = async () => {
            try {
                await axios.get("http://localhost:24813/api/Rooms").then((res) => { setData(res.data) })
            } catch (err) {
                console.log(err)
            }
        }
        getRoom();

    }, [reducer])


    console.log("Room")
    console.log(data)

    const handleAdd = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:24813/api/Rooms/',{
                available : true
            }).then((res) => { setRoom(res.data) })
            setReducer()
        } catch (err) {
            console.log(err)
        }
    }

   
    const onchangevalue = (e) => {
        e.preventDefault();
        setRoomupdate({ ...roomupdate, [e.target.name]: e.target.value });
        console.log(roomupdate)
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(roomupdate)
        if(roomupdate.available === "1"){
            setRoomupdate({...roomupdate,[roomupdate.available] :1})
        }
        try {
            await axios.put(`http://localhost:24813/api/Rooms/${roomupdate.roomId}`, roomupdate)
            setReducer()
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete =async (e)=>{
        e.preventDefault()
        try{
            await axios.delete(`http://localhost:24813/api/Rooms/${roomdelete.roomId}`)
            setReducer()
        }catch(err){
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
                                    <h2>Manage <b>Rooms</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={(e)=>{handleAdd(e)}} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Room</span></a>
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
                                    <th>Room ID</th>
                                    <th>Available</th>

                                </tr>
                            </thead>
                            <tbody>

                                {data.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.roomId}</td>
                                        <td>{JSON.stringify(obj.available)}</td>
                                        <td>
                                            <a href="#editEmployeeModal" onClick={() => { setRoomupdate(obj) }} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal" onClick={()=>{setRoomtypedelete(obj)}}><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>


                                    </tr>
                                ))
                                }                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
           
            {/* <!-- Edit Modal HTML --> */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Room</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="bo"   className="form-control" defaultValue={JSON.stringify(roomupdate.available)} onChange={(e) => onchangevalue(e)} name="available" required />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" onClick={handleUpdate}/>
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
                                <h4 className="modal-title">Delete Room</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" onClick={(e)=>{handleDelete(e)}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;