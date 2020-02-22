import React, { Component } from 'react';

class List extends Component {
    state = {}

    componentDidUpdate(prevProps) {
        let newstate = { ...this.state }
        if (this.props.todoList !== prevProps.todoList) {
            this.props.todoList.map(item => { newstate[item.user] = newstate[item.user] ? newstate[item.user] : getRandomColor()
            return null }
            )
            this.setState(newstate)
        }
    }

    render() {
        return (<div>

            <h2>To-do List</h2>
            <ul>
                {this.props.todoList.map((item, index) =>


                    <li style={{ backgroundColor: this.state[item.user] }} key={index}>{item.title} {item.user}</li>


                )}
            </ul>
        </div>);
    }
}

export default List;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
