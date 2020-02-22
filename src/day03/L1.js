import React, { Component } from 'react';
class L1 extends Component {
    state = { title: '' }
    render() {
        return (<div>
            <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} placeholder="Enter your text" />
            <span>{this.state.title}</span>
        </div>);
    }
}

export default L1;