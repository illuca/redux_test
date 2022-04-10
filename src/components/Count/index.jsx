import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {
    increase = () => {
        const value = this.selectNumber.value * 1
        this.props.increase(value)
    }
    decrease = () => {
        const value = this.selectNumber.value * 1
        this.props.decrease(value)
    }
    increaseIfOdd = () => {
        const value = this.selectNumber.value * 1
        this.props.increaseIfOdd(value)
    }
    increaseSync = () => {
        const value = this.selectNumber.value * 1
        this.props.increaseSync(value, 1000)
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