import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllDataInitiate, getSingleData } from "../redux/actions/action";
import moment from "moment";
import {
  makeStyles,
  Typography,
  Paper,
  Container,
  Grid,
  Button,
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
  paper: {
    padding: 20,
  },
}));
const Feeds = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.data);
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  useEffect(() => {
    dispatch(getAllDataInitiate());
  }, [dispatch]);
  if (!allData) {
    return <div> Loading.... </div>;
  } else {
    return (
      <Container className={classes.container}>
        <Grid container spacing={2} justifyContent="flex-start">
          {allData &&
            allData.map((data) => (
              <Grid item key={data.id}>
                <Paper className={classes.paper}>
                  <Typography variant="h5">{data.Title}</Typography>
                  <Typography variant="body1">
                    {moment(data.createdAt.toDate()).calendar()}, By {data.Name}
                  </Typography>{" "}
                  <br />
                  <Button onClick={() => handleClick(data.id)}>see more</Button>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
};

export default Feeds;
