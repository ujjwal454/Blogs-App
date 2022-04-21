import React from "react";
import { signOutInitiate } from "../redux/actions/action";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	AppBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		position: "fixed",
		[theme.breakpoints.down("sm")]: {
			width: `calc(100% - 50px)`,
		},
	},
	Toolbar: {
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			fontSize: "15px",
		},
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const handleClick = () => {
		dispatch(signOutInitiate());
	};
	return (
		<AppBar color="primary" className={classes.AppBar} elevation={0}>
			<Toolbar>
				<Typography variant="h5" className={classes.Toolbar}>
					Hello,{user?.email}
				</Typography>
				<Button color="secondary" variant="contained" onClick={handleClick}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
