import React, { Component } from 'react';
import { connect } from "react-redux"


class D5L2 extends Component {
    state = {}
    render() {
        return (<div>
            <label htmlFor="text">Text Goes here : </label> &nbsp;
            <input type="text" onChange={(e) => this.props.dispatch({ type: "change_input", payload: e.target.value })} value={this.props.searchTerm} />
        </div>);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(D5L2);