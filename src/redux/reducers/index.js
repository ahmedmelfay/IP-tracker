import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import loading from "./loadingReducer";

const reducers = combineReducers({
  data: dataReducer,
  loading,
});

export default reducers;
