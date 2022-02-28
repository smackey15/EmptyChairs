import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";

const uiRedudcer = combineReducers ({
    modal: modalReducer,
})

export default uiRedudcer;
