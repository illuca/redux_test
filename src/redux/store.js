import {createStore, applyMiddleware, combineReducers} from "redux"
import countReducer from "./reducers/count"
import personReducer from "./reducers/person";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import allReducers from "./reducers";


const store =  createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store;
