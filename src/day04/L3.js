import React, { Component } from 'react';
import Input from "./Input L2"
import List from "./List L3"
class D4L3 extends Component {

    state = {
        title: '',
        user: "quicktarbert",
        users: ["quicktarbert",
            "jibboomgriddle",
            "liftedrewash",
            "ideanylon",
            "dynamicsdefense",
            "idbait",
            "footgearwheeler",
            "dicytrade",
            "cowbignum",
            "founderhiking",
            "mosaicthruck",
            "cookieradium",
            "fraysdroplet",
            "shortsneck",
            "wittedavenger",
            "eviediner",
            "maltplayhouse",
            "filthytooth"],
        todoList: []
    }

    changeTitle = (val) => {

        this.setState({
            title: val
        })
    }
    changeUser = (val) => {

        this.setState({
            user: val
        })
    }

    addTodo = () => {
        const { title, user } = this.state
        this.setState({
            todoList: [{ title, user }, ...this.state.todoList],
            title: '',
            user: 'quicktarbert',
            showUser: 'quicktarbert'
        })
    }

    render() {
        return (<div>

            <Input
                user={this.state.user}
                addTodo={this.addTodo}
                title={this.state.title}
                users={this.state.users}
                changeUser={this.changeUser}
                changeTitle={this.changeTitle}
            />
            <br />
        <h3>Show todos for :</h3>
            <select name="users" value={this.state.showUser} onChange={(e) => this.setState({ showUser: e.target.value })}  >
                {this.state.users.map((user,index) =>
                    <option key={index} value={user}>{user}</option>
                )}
            </select>
            <List user={this.state.showUser} users={this.state.users} todoList={this.state.todoList} />

        </div>);
    }
}

export default D4L3;