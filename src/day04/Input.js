import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (<div>
            <label htmlFor="title">Title </label> :&nbsp;&nbsp;&nbsp;

            <input type="text" value={this.props.title} onChange={(e) => this.props.changeTitle(e.target.value)} placeholder="Enter your text" />

        </div>);
    }
}

function InputFunc(props) {
    return (<div>
        <label htmlFor="input">Functional input</label> :&nbsp;&nbsp;&nbsp;

        <input type="text" value={props.title2} onChange={(e) => props.changeTitle2(e.target.value)} placeholder="Enter your text" />
    </div>);

}

export { Input, InputFunc }