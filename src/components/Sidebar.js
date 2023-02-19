import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { SubjectOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 50,
    padding: "10px",
    position: "fixed",
    minHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: 50,
      backgroundColor: "#3f51b5",
      color: "#fff",
      margin: "auto",
    },
  },
  padding: {
    padding: "25px 10px 10px 10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  text: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  typo: {
    fontSize: "28px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  active: {
    background: "#f4f4f4",
  },
}));
const Sidebar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const menuItems = [
    {
      text: "All Blogs",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Blogs",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
    {
      text: "Personal Blogs",
      icon: <RecentActorsIcon color="secondary" />,
      path: "/personalBlogs",
    },
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.padding}>
        <Typography variant="h5" className={classes.typo}>
          Blogs
        </Typography>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon color="secondary" className={classes.icon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText className={classes.text}>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
