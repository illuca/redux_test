import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {
    state = {
        count: 0
    }
    increase = () => {

        const {count} = this.state
        const value = this.selectNumber.value * 1
        this.setState({count: count + value})
    }
    decrease = () => {
        const {count} = this.state
        const value = this.selectNumber.value * 1
        this.setState({count: count - value})
    }
    increaseIfOdd = () => {
        const {count} = this.state
        const value = this.selectNumber.value * 1
        if (count % 2 == 1) {
            this.setState({count: count + value})
        }
    }
    increaseSync = () => {
        setTimeout(this.increase, 500)
    }

    render() {
        return (
            <div>
                <p>当前求和为:{this.state.count}</p>
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