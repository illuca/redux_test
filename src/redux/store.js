import {createStore, applyMiddleware, combineReducers} from "redux"
import countReducer from "./reducer/count"
import personReducer from "./reducer/person";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const allReducers = combineReducers({
    totalCount: countReducer,
    persons : personReducer
})
const store =  createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store;
