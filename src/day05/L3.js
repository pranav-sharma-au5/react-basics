import React, { Component } from 'react';
import { connect } from "react-redux"
import List from "./List";

class D5L3 extends Component {
    state = {}
    render() {
        return (<div>
            <label htmlFor="text">Todo title : </label> &nbsp;
            <input type="text" placeholder="Add todo" onChange={(e) => this.props.dispatch({ type: "change_title", payload: e.target.value })} value={this.props.title} />
            <button onClick={() => this.props.dispatch({ type: "add_todo" })} disabled={!this.props.title}> Add</button>

            <List />

        </div>);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(D5L3);