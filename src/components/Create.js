import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataInitiate } from "../redux/actions/action";
import {
	makeStyles,
	Button,
	Container,
	Typography,
	TextField,
} from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	container: {
		width: `calc(100% - ${drawerWidth}px)`,
		position: "absolute",
		minHeight: "100vh",
		top: 65,
		right: 0,
		padding: "10px",
		[theme.breakpoints.down("sm")]: {
			width: `calc(100% - 50px)`,
		},
	},
	field: {
		width: "60%",
		marginBottom: "20px",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	paper: {
		padding: 20,
	},
}));
const Create = () => {
	const classes = useStyles();
	const [Title, setTitle] = useState("");
	const [Details, setDetails] = useState("");
	const [Name, setName] = useState("");
	const [error, seterror] = useState(false);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (Title === "" || Details === "" || Name === "") {
			alert("cant create with empty values");
			seterror(true);
		} else {
			const data = {
				Title,
				Details,
				Name,
				createdAt: new Date(),
			};
			dispatch(addDataInitiate(data));
			setTitle("");
			setDetails("");
			setName("");
			alert("data succesfully added to database");
		}
	};
	return (
		<Container className={classes.container}>
			<Typography variant="h4" gutterBottom>
				Create Blogs
			</Typography>
			<form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<TextField
					className={classes.field}
					variant="outlined"
					fullWidth
					required
					label="Title"
					color="secondary"
					placeholder="Blog Title Here"
					error={error}
					value={Title}
					onChange={(e) => setTitle(e.target.value)}
				></TextField>
				<br />
				<TextField
					className={classes.field}
					variant="outlined"
					fullWidth
					required
					label="Details"
					error={error}
					color="secondary"
					placeholder="Blog Details Here"
					multiline
					row={4}
					value={Details}
					onChange={(e) => setDetails(e.target.value)}
				></TextField>
				<br />
				<TextField
					variant="outlined"
					color="secondary"
					required
					label="Name"
					error={error}
					type="text"
					className={classes.field}
					placeholder="What we Should Call you"
					value={Name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					size="large"
				>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default Create;
