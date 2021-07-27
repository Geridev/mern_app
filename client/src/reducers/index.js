import { combineReducers } from "redux";

import servers from "./servers";
import auth from "./auth";

export default combineReducers({
  servers,
  auth,
});
