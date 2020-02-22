import React, { Component } from 'react';
import { connect } from "react-redux"


class D5L1 extends Component {
    state = {}
    render() {
        return (<div>
            <p><i>{this.props.text}</i></p>
        </div>);
    }
}

let mapStateToProps = state => {
    return { text: state.text }
}

export default connect(mapStateToProps)(D5L1);