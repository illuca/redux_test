import CountUI from "../../components/Count";
import store from "../../redux/store";
import {createIncreaseAction, createIncreaseAsyncAction, createDecreaseAction} from "../../redux/count_action_creator";

const {connect} = require("react-redux");


const CountContainer = connect(
    // mapStateToProps
    (state) => {
        return {count: state}
    },
    // mapDispatchToProps
    {
        increase: createIncreaseAction,
        decrease: createDecreaseAction,
        increaseSync: createIncreaseAsyncAction
    }
)(CountUI)
export default CountContainer
