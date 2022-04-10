import {combineReducers} from "redux";
import count from "./count";
import person from "./person";


const allReducers = combineReducers({
    totalCount: count,
    persons: person
})
export default allReducers