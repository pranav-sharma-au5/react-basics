import React, { Component } from 'react';

class List extends Component {
    state = {}
    render() {
        return (<div>

            <h2>To-do List</h2>
            <ul>
                {this.props.todoList.map((item, index) =>
                    // this.props.user === item.user &&

                    <li key={index}>{item.title} {item.user}</li>


                )}
            </ul>
        </div>);
    }
}

export default List;