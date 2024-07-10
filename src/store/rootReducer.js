import { combineReducers } from "redux";
import user from "./reducer/user";
// import slices

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
