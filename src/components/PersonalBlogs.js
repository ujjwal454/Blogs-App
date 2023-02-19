import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllDataInitiate,
  getSingleData,
  deleteSingleData,
  addSingleData,
} from "../redux/actions/action";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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
const PersonalBlogs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allData } = useSelector((state) => state.data);
  console.log(allData);
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteSingleData(id));
    }
  };
  const hadnleEdit = (data) => {
    dispatch(addSingleData(data));
    navigate("/editData");
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
            allData.map((data) => {
              if (user.email === data.email) {
                return (
                  <Grid item key={data.id}>
                    <Paper className={classes.paper}>
                      <Typography variant="h5">{data.Title}</Typography>
                      <Typography variant="body1">
                        {moment(data.createdAt.toDate()).calendar()}, By{" "}
                        {data.Name}
                      </Typography>{" "}
                      <br />
                      <div className={classes.btnGroup}>
                        <Button onClick={() => handleClick(data.id)}>
                          see more
                        </Button>
                        <Button
                          onClick={() =>
                            hadnleEdit({
                              title: data.Title,
                              detail: data.Details,
                              name: data.Name,
                              id: data.id,
                            })
                          }
                        >
                          <EditIcon />
                        </Button>
                        <Button onClick={() => handleDelete(data.id)}>
                          <DeleteIcon />
                        </Button>
                      </div>
                    </Paper>
                  </Grid>
                );
              }
            })}
        </Grid>
      </Container>
    );
  }
};

export default PersonalBlogs;
