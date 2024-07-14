import { combineReducers } from "redux";
import user from "./reducer/user.ts";
import project from "./reducer/project.ts";
import ui from "./reducer/ui.ts";
// import slices

const rootReducer = combineReducers({
  user,
  project,
  ui,
});

export default rootReducer;
