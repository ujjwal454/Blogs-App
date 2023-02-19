import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Signup from "../pages/Signup";
import Feeds from "./Feeds";
import { removeError } from "../redux/actions/action";
const PrivateRoute = ({ children }) => {
  console.log("Private");

  const { user, error } = useSelector((state) => state.user);
  const [User, setUser] = useState(user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Private");
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user]);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(removeError());
    }
  }, [error]);
  return !User ? <Outlet /> : <Feeds />;
};

export default PrivateRoute;
