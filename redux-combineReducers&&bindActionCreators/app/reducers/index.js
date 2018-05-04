import { combineReducers } from "redux";
import todolist from "./todolist.js";
import counter from "./counter.js";
// 暴露合并的reducer
export default combineReducers({
    todolist,
    counter
});

