import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Signup from "../pages/Signup";
import { removeError } from "../redux/actions/action";
const ProtectedRoute = () => {
	const { user, error } = useSelector((state) => state.user);
	const [User, setUser] = useState(user);
	const dispatch = useDispatch();
	useEffect(() => {
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
	return User ? <Outlet /> : <Signup />;
};

export default ProtectedRoute;
