import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../Header/Header";

function Update(props) {
    const [data, setData] = useState({
        CustId: "",
        customerName: "",
        customerAddress: "",
        customerCity: "",
        customerEmail: "",
        password: "",
    });
    

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(data)
        try {
            const url = "http://localhost:24813/api/Customers";
            
            const { data: res } = await axios.put(`http://localhost:24813/api/Customers/${id}`, data);
            navigate("/");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };
    const id = localStorage.getItem("ID");

    useEffect(() => {
        const getCust = async () => {
            try {
                await axios.get(`http://localhost:24813/api/Customers/${id}`).then((response) => {
                    // console.log(response.data)
                    setData(response.data);
                })
            } catch (err) {
                console.log(err)
            }
        }
        getCust()
    }, [])
    console.log(data)


    return (
        <div>
            <Header />
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>

                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={handleUpdate}>
                            <h1>Update Account</h1>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="customerName"
                                onChange={handleChange}
                                defaultValue={data.customerName}
                                required
                                className={styles.input}
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                name="customerEmail"
                                onChange={handleChange}

                                required defaultValue={data.customerEmail}
                                className={styles.input}
                            />
                            <textarea
                                type="textarea"
                                placeholder="Address"
                                name="customerAddress"
                                onChange={handleChange}

                                required defaultValue={data.customerAddress}
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="city and state"
                                name="customerCity"
                                onChange={handleChange}

                                required defaultValue={data.customerCity}
                                className={styles.input}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}

                                required defaultValue={data.password}
                                className={styles.input}
                            />
                            {error && <div className={styles.error_msg}>{error}</div>}
                            <button type="submit" className={styles.green_btn}>
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update;