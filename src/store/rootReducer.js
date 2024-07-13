import { combineReducers } from "redux";
import user from "./reducer/user.ts";
// import slices

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
