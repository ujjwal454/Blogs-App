import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { dataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
	user: authReducer,
	data: dataReducer,
});
