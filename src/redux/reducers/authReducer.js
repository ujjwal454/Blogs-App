import * as types from "../constant";

const initialState = {
	user: null,
	loading: false,
	error: null,
};

export const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case types.LOGOUT_START:
		case types.REGISTER_START:
		case types.LOGIN_START:
			return {
				...state,
				loading: true,
			};
		case types.REGISTER_SUCCESS:
		case types.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: actions.payload,
			};
		case types.REGISTER_FAIL:
		case types.LOGIN_FAIL:
		case types.LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				error: actions.payload,
			};
		case types.LOGOUT_SUCCESS:
			return {
				...state,
				loading: false,
				user: null,
			};
		case types.SET_USER:
			return {
				...state,
				user: actions.payload,
			};
		case types.REMOVE_ERRO:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
