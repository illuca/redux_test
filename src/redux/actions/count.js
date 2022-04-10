import {DECREASE, INCREASE, INCREASE_ASYNC} from "../constant";
import store from "../store";

export const createIncreaseAction = value => ({type: INCREASE, data: value})
export const createDecreaseAction = value => ({type: DECREASE, data: value})
export const createIncreaseAsyncAction = (data, time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncreaseAction(data))
        }, time)
    }
}