import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getSingleData, removeSingleDetail } from "../redux/actions/action";
import moment from "moment";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	Container: {
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
	mainHeading: {
		textAlign: "center",
		marginBottom: "50px",
	},
	spacing: {
		marginBottom: "20px",
	},
}));
const SingleFeed = () => {
	const classes = useStyles();
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSingleData(id));
		return () => {
			dispatch(removeSingleDetail());
		};
	}, [dispatch, id]);
	const { data } = useSelector((state) => state.data);
	useEffect(() => {});
	return (
		<Container className={classes.Container}>
			{data &&
				data.map((singleData) => (
					<div key={id}>
						<Typography variant="h5" className={classes.mainHeading}>
							Blogs Details
						</Typography>
						<Typography variant="h6">{singleData.Title}</Typography>
						<Typography variant="overline" className={classes.spacing}>
							{moment(singleData.createdAt.toDate()).calendar()}, By{" "}
							{singleData.Name}
						</Typography>
						<Typography variant="body2" className={classes.spacing}>
							{singleData.Details}
						</Typography>
					</div>
				))}
		</Container>
	);
};

export default SingleFeed;
