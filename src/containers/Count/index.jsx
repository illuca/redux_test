import CountUI from "../../components/Count";
import store from "../../redux/store";
import {createIncreaseAction, createIncreaseAsyncAction, createDecreaseAction} from "../../redux/count_action_creator";

const {connect} = require("react-redux");

function mapStateToProps() {
    return {
        count: store.getState()
    }
}

function mapDispatchToProps() {
    return {
        increase: (number) => {
            return store.dispatch(createIncreaseAction(number))
        },
        decrease: number => {
            return store.dispatch(createDecreaseAction(number))
        },
        increaseIfOdd: number => {
            if(store.getState() % 2==1) {
                return store.dispatch(createIncreaseAction(number))
            }
        },
        increaseSync: (number, time) => {
            return store.dispatch(createIncreaseAsyncAction(number, time))
        }
    }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default CountContainer
