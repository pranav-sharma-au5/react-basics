import React, { Component } from 'react';
import { connect } from "react-redux"
import List from "./List L4";

class D5L4 extends Component {
    state = {
        showTodos: 'today'
    }
    render() {
        return (<div>
            <label htmlFor="text">Todo title : </label> &nbsp;
            <input type="text" placeholder="Add todo" onChange={(e) => this.props.dispatch({ type: "change_titleL4", payload: e.target.value })} value={this.props.titleL4} />
            <br />
            <br />
            <label htmlFor="deadline">Deadline: </label> &nbsp;

            <input type="date"  onChange={(e) => this.props.dispatch({ type: "change_date", payload: e.target.value })} value={this.props.date} /> &nbsp;
            <button onClick={() => this.props.dispatch({ type: "add_todoL4" })} disabled={!this.props.titleL4}> Add</button>
            <br/>
            <br/>
            <select name="date" onChange={(e) => this.setState({ showTodos: e.target.value })} >
                <option value="today">Today</option>
                <option value="previous">Previous</option>
                <option value="next">Next</option>
            </select>
            <List showTodos={this.state.showTodos} />

        </div>);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(D5L4);