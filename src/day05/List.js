import React, { Component } from 'react';
import { connect } from "react-redux"

class List extends Component {
    state = {}
    render() {
        return (<div>

            <h2>To-do List</h2>
            <ul>
                {this.props.todos.map((item, index) =>

                    <li key={index}>{item} </li>


                )}
            </ul>
        </div>);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(List);