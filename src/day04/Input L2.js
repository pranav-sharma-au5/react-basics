import React, { Component } from 'react';

class InputL2 extends Component {
    render() {
        return (<div>
            <label htmlFor="title">Title </label> :&nbsp;&nbsp;&nbsp;
            <input type="text" value={this.props.title} onChange={(e) => this.props.changeTitle(e.target.value)} placeholder="Enter your text" />
            <br/>
            <br/>
            <label htmlFor="username">Username </label> :&nbsp;&nbsp;&nbsp;

            <select name="users" value={this.props.user} onChange={(e) => this.props.changeUser(e.target.value)}  >
                {this.props.users.map((user,index) =>
                    <option key={index} value={user}>{user}</option>
                )}
            </select>
            <br/>
            <br/>
            <button onClick={()=>this.props.addTodo()} >Add to-do</button>

        </div>);
    }
}



export default InputL2 