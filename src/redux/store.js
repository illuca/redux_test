import {createStore, applyMiddleware} from "redux"
import countReducer from "./reducer/count"
import thunk from "redux-thunk";

const store =  createStore(countReducer, applyMiddleware(thunk))
export default store;
