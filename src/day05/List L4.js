import React, { Component } from 'react';
import { connect } from "react-redux"

class List extends Component {
    state = {}
    render() {
        return (<div>

            <h2>To-do List</h2>
            <ul>
                {this.props.todosL4.map((item, index) => {

                    if (checkDate(item.date,this.props.showTodos))
                        return < li key={index} > {item.title} {item.date} </li>
                    return null
                }

                )}
            </ul>
        </div >);
    }
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(List);

function checkDate(date,day) {
    let x = new Date(date)
    let y = new Date(new Date().toISOString().split("T")[0])
    let Difference_In_Time = x.getTime() - y.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let check = {
        today: Difference_In_Days < 1 && Difference_In_Days > -1,
        next: Difference_In_Days >= 1,
        previous: Difference_In_Days <= - 1
    }
    return check[day]
}