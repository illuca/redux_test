import store from "../store";
import {ADD_PERSON} from "../constant";

export const createAddPersonAction = personObj => {
    console.log('@action收到', personObj)
    return {type: ADD_PERSON, personObj: personObj}
}
