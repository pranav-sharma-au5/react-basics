import { createStore } from "redux";

let initialState = {
    text: "Hello Redux",
    searchTerm: "redux editable input",
    title: "",
    titleL4: "",
    titleL5: "",
    date: new Date().toISOString().split("T")[0],
    dateL5: new Date().toISOString().split("T")[0],
    todos: ["todo1", "todo2"],
    todosL4: [],
    todosL5: []
}

function reducer(state = initialState, action) {
    let stateCopy = { ...state }
    switch (action.type) {
        case "change_input":
            stateCopy.searchTerm = action.payload
            return stateCopy
        case "change_title":
            stateCopy.title = action.payload
            return stateCopy
        case "add_todo":
            stateCopy.todos.unshift(stateCopy.title)
            stateCopy.title = ""
            return stateCopy
        case "change_titleL4":
            stateCopy.titleL4 = action.payload
            return stateCopy
        case "change_date":
            stateCopy.date = action.payload
            return stateCopy
        case "add_todoL4":
            console.log(stateCopy)
            stateCopy.todosL4.unshift({ title: stateCopy.titleL4, date: stateCopy.date })
            stateCopy.titleL4 = ""
            return stateCopy
        case "change_titleL5":
            stateCopy.titleL5 = action.payload
            return stateCopy
        case "change_dateL5":
            stateCopy.dateL5 = action.payload
            return stateCopy
        case "add_todoL5":
            console.log(stateCopy)
            stateCopy.todosL5.unshift({ title: stateCopy.titleL5, dateL5: stateCopy.dateL5 })
            stateCopy.titleL5 = ""
            return stateCopy
        case "add_todos_api":

            stateCopy.todosL5 = [...action.payload, stateCopy.todosL5]
            stateCopy.titleL5 = ""
            return stateCopy
        default: return stateCopy
    }
}

export default createStore(reducer)