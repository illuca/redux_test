import React, {Component} from 'react';
import store from "../../redux/store";

class Person extends Component {
    addPerson = () => {
        {
            name:this.nameNode.value,
                age:this.ageNode.value
        }

    }
    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <input type={"text"} ref={c => this.nameNode = c} placeholder={"输入名字"}/>
                <input type={"text"} ref={c => this.ageNode = c} placeholder={"输入年龄"}/>
                <button onClick={this.addPerson}>添加</button>
                <div>
                    <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Person;