import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../Header/Header";

const Signup = () => {
	const [data, setData] = useState({
		Id: "",
		CustomerName: "",
		CustomerAddress: "",
		CustomerCity: "",
		CustomerEmail: "",
		Password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(data)
		try {
			const url = "http://localhost:24813/api/Customers";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
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

	return (
		<div>
			<Header />
			<div className={styles.signup_container}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Back</h1>
						<Link to="/login">
							<button type="button" className={styles.white_btn}>
								Sing in
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>Create Account</h1>
							<input
								type="text"
								placeholder="First Name"
								name="CustomerName"
								onChange={handleChange}
								value={data.CustomerName}
								required
								className={styles.input}
							/>

							<input
								type="email"
								placeholder="Email"
								name="CustomerEmail"
								onChange={handleChange}
								value={data.CustomerEmail}
								required
								className={styles.input}
							/>
							<textarea
								type="textarea"
								placeholder="Address"
								name="CustomerAddress"
								onChange={handleChange}
								value={data.CustomerAddress}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="city and state"
								name="CustomerCity"
								onChange={handleChange}
								value={data.CustomerCity}
								required
								className={styles.input}
							/>

							<input
								type="password"
								placeholder="Password"
								name="Password"
								onChange={handleChange}
								value={data.Password}
								required
								className={styles.input}
							/>
							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
								Sing Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
