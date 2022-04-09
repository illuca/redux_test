import React, {Component} from 'react';
import store from "../../redux/store";
import {createDecreaseAction, createIncreaseAction, createIncreaseAsyncAction} from "../../redux/count_action_creator";

class Count extends Component {
    increase = () => {
        const value = this.selectNumber.value * 1
        store.dispatch(createIncreaseAction(value))
    }
    decrease = () => {
        const value = this.selectNumber.value * 1
        store.dispatch(createDecreaseAction(value))
    }
    increaseIfOdd = () => {
        const count = store.getState()
        if (count % 2 == 1) {
            this.increase()
        }
    }
    increaseSync = () => {
        setTimeout(this.increase, 500)
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                <p>当前求和为:{store.getState()}</p>
                <select ref={(elem) => this.selectNumber = elem}>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                </select>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
                <button onClick={this.increaseIfOdd}>increaseIfOdd</button>
                <button onClick={this.increaseSync}>increaseSync</button>
            </div>
        );
    }
}

export default Count;