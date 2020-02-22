import React, { Component } from 'react';
import { Input, InputFunc } from "./Input"

class D4L1 extends Component {

    state = {
        title: 'parent',
        title2: 'parent functional'
    }

    changeTitle = (val) => {

        this.setState({
            title: val
        })
    }

    changeTitle2 = (val) => {

        this.setState({
            title2: val
        })
    }
    render() {
        return (<div>
            <label htmlFor="input">Class input</label> :&nbsp;&nbsp;&nbsp;

            <Input title={this.state.title} changeTitle={this.changeTitle} />
            <span><strong>{this.state.title}</strong></span>
            <br />
            <br />
            <InputFunc title2={this.state.title2} changeTitle2={this.changeTitle2} />
            <span><strong>{this.state.title2}</strong></span>
        </div>);
    }
}

export default D4L1;