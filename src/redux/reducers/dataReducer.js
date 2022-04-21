import * as types from "../constant";
const initialState = {
	allData: [],
	data: [],
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_DATA:
			return {
				...state,
				allData: action.payload,
			};
		case types.GET_DATA:
			const singleData = action.payload;
			const array = [];
			array.push(singleData);
			return {
				...state,
				data: array,
			};
		case types.REMOVE_SINGLE_DETAIL:
			return {
				...state,
				data: [],
			};
		default:
			return state;
	}
};
