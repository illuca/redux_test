import {ADD_PERSON} from "../constant";
import {nanoid} from "nanoid";

const initPerson = [{id: nanoid(), name: '小明', age: 18}]
export default function personReducer(preState = initPerson, action) {
    const {type, personObj} = action
    console.log('@reducers: personObj', personObj)
    console.log('@reducers: actions', action)
    switch (type) {
        case ADD_PERSON:
            return [personObj, ...preState]
        default:
            return preState;
    }
}
