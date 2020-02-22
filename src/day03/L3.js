import React, { Component } from 'react';
class L3 extends Component {
    state = {
        title: '',
        deadline: new Date().toISOString().split("T")[0],
        list: [
            { deadline: "2020-03-01", title: "sunday task" },

            { deadline: "2020-02-29", title: "saturday task" },

            { deadline: "2020-02-28", title: "friday task" },

            { deadline: "2020-02-27", title: "thursday task" },

            { deadline: "2020-02-26", title: "wednesday task" },

            { deadline: "2020-02-25", title: "tuesday task" },

            { deadline: "2020-02-24", title: "monday task" }
        ],
        selectedDay: '1'
    }

    handleOnClick() {
        const { title, deadline } = this.state
        this.setState({
            list: [{ title, deadline }, ...this.state.list],
            title: "",
        })

    }

    render() {
        return (<div>
            <label htmlFor="title"></label>
            <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} placeholder="Enter your text" />
            <label htmlFor="date"></label>
            <input type="date" onChange={(e) => this.setState({ deadline: e.target.value })} value={this.state.deadline} />
            <input type="submit" value="submit" onClick={() => this.handleOnClick()} disabled={!this.state.title} />
            <br />
            <select onChange={(e) => this.setState({ selectedDay: e.target.value })} name="day" >
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="0">Sunday</option>
            </select>

            <ul>
                {this.state.list.map((item, index) => {
                    let day = (new Date(item.deadline))
                    return (

                        day.getDay() + "" === this.state.selectedDay && (

                            <li key={index} >{item.title}</li>
                        )

                    )
                })}
            </ul>
        </div>);
    }
}

export default L3;