import React, { useState } from "react";
import "./background.css";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Paper,
	Typography,
	makeStyles,
	TextField,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((thme) => ({
	container: {
		minHeight: "100vh",
		maxHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "-50px",
	},
	paper: {
		padding: "20px",
		textAlign: "center",
		width: 350,
	},
	field: {
		width: "100%",
		marginBottom: "20px",
	},
	heading: {
		marginBottom: "20px",
	},
	mainHeading: {
		fontStyle: "italic",
		color: "#fff",
		textAlign: "center",
		paddingTop: "50px",
		position: "relative",
	},
	subtitle: {
		position: "absolute",
		color: "#fff",
		bottom: 0,
		right: 0,
	},
	link: {
		margin: "10px 0",
	},
}));
const Login = () => {
	const classes = useStyles();
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (Email === "" || Password === "") {
			alert("please input data in all the fields then try to signup");
		} else {
			dispatch(loginInitiate(Email, Password));
			setEmail("");
			setPassword("");
			navigate("/");
		}
	};
	return (
		<div className="background">
			<Typography className={classes.mainHeading} variant="h3">
				Blogs App{" "}
			</Typography>
			<Typography className={classes.subtitle} variant="overline">
				By Ujjwal Gupta{" "}
			</Typography>
			<Container className={classes.container}>
				<Paper elevation={1} className={classes.paper}>
					<Typography variant="h4" className={classes.heading}>
						Login
					</Typography>
					<form noValidate autoComplete="off" onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							color="secondary"
							required
							label="Email"
							type="email"
							className={classes.field}
							value={Email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br />
						<TextField
							variant="outlined"
							color="secondary"
							required
							label="Password"
							type="password"
							className={classes.field}
							value={Password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<br />
						<Button type="submit" variant="contained" color="secondary">
							Login
						</Button>
						<Typography variant="h6" className={classes.link}>
							<Link to="/signup">Dont have an account? SignUp</Link>
						</Typography>
					</form>
				</Paper>
			</Container>
		</div>
	);
};

export default Login;
