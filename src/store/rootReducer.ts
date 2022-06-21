import { combineReducers } from "redux";
import note from "./note";
import notes from "./notes";

const rootReducer = combineReducers({
    notes,
    note
})

export default rootReducer;