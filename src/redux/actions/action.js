import * as types from "../constant";
import { auth } from "../../firebase/firebaseConfig";
import { db } from "../../firebase/firebaseConfig";
export const removeSingleDetail = () => {
	return {
		type: types.REMOVE_SINGLE_DETAIL,
	};
};
export const removeError = () => {
	return {
		type: types.REMOVE_ERRO,
	};
};
const getData = (data) => {
	return {
		type: types.GET_DATA,
		payload: data,
	};
};
const getAllData = (data) => {
	return {
		type: types.GET_ALL_DATA,
		payload: data,
	};
};
const addData = () => {
	return {
		type: types.ADD_DATA,
	};
};
export const setUser = (user) => {
	return {
		type: types.SET_USER,
		payload: user,
	};
};
const registerStart = () => {
	return {
		type: types.REGISTER_START,
	};
};

const registerSuccess = (user) => {
	return {
		type: types.REGISTER_SUCCESS,
		payload: user,
	};
};

const registerFail = (err) => {
	return {
		type: types.REGISTER_FAIL,
		payload: err,
	};
};
const loginStart = () => {
	return {
		type: types.LOGIN_START,
	};
};
const loginSucess = (user) => {
	return {
		type: types.LOGIN_SUCCESS,
		payload: user,
	};
};
const loginFail = (err) => {
	return {
		type: types.LOGIN_FAIL,
		payload: err,
	};
};
const logoutStart = () => {
	return {
		type: types.LOGOUT_START,
	};
};
const logoutSucess = () => {
	return {
		type: types.LOGOUT_SUCCESS,
	};
};
const logoutFail = (err) => {
	return {
		type: types.LOGOUT_FAIL,
		payload: err,
	};
};
export const registerInitiate = (email, password) => {
	return function (dispatch) {
		dispatch(registerStart());
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(registerSuccess(user));
			})
			.catch((err) => {
				dispatch(registerFail(err));
			});
	};
};
export const loginInitiate = (email, password) => {
	return function (dispatch) {
		dispatch(loginStart());
		auth
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(loginSucess(user));
			})
			.catch((err) => {
				dispatch(loginFail(err));
			});
	};
};

export const signOutInitiate = () => {
	return function (dispatch) {
		dispatch(logoutStart());
		auth
			.signOut()
			.then((res) => dispatch(logoutSucess()))
			.catch((err) => {
				dispatch(logoutFail());
			});
	};
};

export const addDataInitiate = (data) => {
	return function (dispatch) {
		db.collection("blogs").doc().set(data);
		dispatch(addData());
	};
};
export const getAllDataInitiate = () => {
	return function (dispatch) {
		db.collection("blogs").onSnapshot((querrySnapshot) => {
			const data = [];
			querrySnapshot.forEach((doc) => {
				data.push({ ...doc.data(), id: doc.id });
			});
			dispatch(getAllData(data));
		});
	};
};
export const getSingleData = (id) => {
	return function (dispatch) {
		db.collection("blogs")
			.doc(id)
			.get()
			.then((data) => {
				console.log({ ...data.data() });
				dispatch(getData({ ...data.data() }));
			})
			.catch((error) => {
				console.log(error, "this error occured");
			});
	};
};
