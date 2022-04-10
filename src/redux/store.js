import {createStore, applyMiddleware, combineReducers} from "redux"
import countReducer from "./reducer/count"
import personReducer from "./reducer/person";
import thunk from "redux-thunk";

const allReducers = combineReducers({
    totalCount: countReducer,
    persons : personReducer
})
const store =  createStore(allReducers, applyMiddleware(thunk))
export default store;
