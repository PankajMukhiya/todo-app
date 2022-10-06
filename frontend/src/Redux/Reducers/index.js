import { combineReducers } from "redux";
import todoReducer from "./ToDoReducers/todoReducer";

const rootReducer = combineReducers({
  todoReducer,
});
export default rootReducer;
