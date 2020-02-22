import React, { Component } from 'react';
import { connect } from "react-redux"
import List from "./List L5";

class D5L5 extends Component {

    state = {
        makeError: "a",
        retry: false,
        loading: true
    }

    componentDidMount = () => {
        setTimeout(this.fetchTodos, 3000)

    }


    fetchTodos = () => {
        let req = fetch('https://jsonplaceholder.typicode.com/todos' + this.state.makeError)
            .then(response => {
                if (response.ok) {
                    this.setState({ retry: false, loading: false })
                    return response.json()
                }
                throw new Error("something went wrong")

            })
            .then(json => this.props.dispatch({ type: "add_todos_api", payload: json }))
        req.catch(err => {
            console.log(err)
            this.setState({ retry: true, makeError: '', loading: false })
        })
    }

    handleRetry = () => {
        this.setState({ loading: true, retry: false }, () => setTimeout(this.fetchTodos, 3000))

    }

    render() {
        console.log("run render")
        return (<div>
            <label htmlFor="text">Todo title : </label> &nbsp;
            <input type="text" placeholder="Add todo" onChange={(e) => this.props.dispatch({ type: "change_titleL5", payload: e.target.value })} value={this.props.titleL5} />
            <br />
            <br />
            <label htmlFor="deadline">Deadline: </label> &nbsp;

            <input type="date" onChange={(e) => this.props.dispatch({ type: "change_dateL5", payload: e.target.value })} value={this.props.dateL5} /> &nbsp;
            <button onClick={() => this.props.dispatch({ type: "add_todoL5" })} disabled={!this.props.titleL5}> Add</button>
            <br />
            <br />
            <select name="date" onChange={(e) => this.setState({ showTodos: e.target.value })} >
                <option value="today">Today</option>
                <option value="previous">Previous</option>
                <option value="next">Next</option>
            </select>
            <List />

            <div className={"loader " + (this.state.loading ? "show" : "hide")} ></div>

            {this.state.retry &&
                <button onClick={() => this.handleRetry()} >Retry</button>
            }

        </div>);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(D5L5);