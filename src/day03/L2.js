import React, { Component } from 'react';
class L2 extends Component {
    state = {
        title: '',
        list: []
    }

    handleOnClick() {

        this.setState({
            list: [this.state.title, ...this.state.list],
            title: ""
        })

    }

    render() {
        return (<div>
            <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} placeholder="Enter your text" />
            <input type="submit" value="submit" onClick={() => this.handleOnClick()} disabled={!this.state.title} />

            <ul>
                {this.state.list.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>);
    }
}

export default L2;