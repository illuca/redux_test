import React, {Component} from 'react';
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";
import {nanoid} from "nanoid";
import store from "../../redux/store";

class Person extends Component {
    addPerson = () => {
        const personObj = {
            id: nanoid(),
            name: this.nameNode.value,
            age: this.ageNode.value * 1
        }
        console.log(personObj)
        this.props.addPerson(personObj)
    }
    handleEnter = (event) => {
        const personObj = {
            id: nanoid(),
            name: this.nameNode.value,
            age: this.ageNode.value * 1
        }
        if(event.key === 'Enter' && personObj.name && personObj.age) {
            this.addPerson()
        }
    }

    render() {
        return (
            <div>
                <h1>我是Person组件</h1>
                <div onKeyUp={this.handleEnter}>
                    <input type={"text"} ref={c => this.nameNode = c} placeholder={"输入名字"}/>
                    <input type={"text"} ref={c => this.ageNode = c} placeholder={"输入年龄"}/>
                    <button onClick={this.addPerson}>添加</button>
                </div>
                <ul>
                    {
                        this.props.persons.map(e => {
                            console.log('@', e)
                            return <li key={e.id}>
                                <span>{e.name}</span>&nbsp;&nbsp;
                                <span>{e.age}</span>
                            </li>
                        })
                    }
                </ul>
                count组件的求和为:{this.props.totalCount}
            </div>
        );
    }
}

const PersonContainer = connect(
    // mapStateToProps
    (state) => {
        console.log('@传参persons', state.persons)
        return {
            persons: state.persons,
            totalCount: state.totalCount
        }
    },
    // mapDispatchToProps
    {
        addPerson: createAddPersonAction
    }
)(Person)
export default PersonContainer