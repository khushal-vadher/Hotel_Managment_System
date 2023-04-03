import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
	const [data, setData] = useState({ CustomerEmail: "", Password: "" });
	const [error, setError] = useState("");
	const nav = useNavigate();


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		// if(data.CustomerEmail ==="" || data.Password == ""){
		// 	alert("Plase enter the email and password")
		// }
		if (data.CustomerEmail === "kd1510@gmail.com" && data.Password === "kd1") {
			localStorage.setItem("email",data.CustomerEmail)
			localStorage.setItem("ID",4)
			nav("/admin")
		}
		else {
			e.preventDefault();
			try {
				const url = "http://localhost:24813/api/Auth/Login";
				const res = await axios.post(url, data);
				console.log("Login")
				console.log(res.data)
				// console.log(res)
				if (res.data.username && res.data.password) {
					localStorage.setItem("email", res.data.username)
					localStorage.setItem("ID", res.data.token)
					// localStorage.setItem("id",res.data.CustId)
					// alert("You have SuccessFully Login");
					nav("/")
				}
				else {
					alert("Invalid Credentials")
				}
				setData("");


			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setError(error.response.data.message);
				}
			}
		}
	};

	return (
		<div>
			<Header />
			<div className={styles.login_container}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>Login to Your Account</h1>
							<input
								type="email"
								placeholder="Email"
								name="CustomerEmail"
								onChange={handleChange}
								value={data.CustomerEmail}
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
								Sign In
							</button>
						</form>
					</div>
					<div className={styles.right}>
						<h1>New Here ?</h1>
						<Link to="/signup">
							<button type="button" className={styles.white_btn}>
								Sing Up
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Login;
