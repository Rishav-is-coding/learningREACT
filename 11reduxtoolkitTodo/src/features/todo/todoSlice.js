import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: 'sample todo'
    }]
}

export const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo ={
                id: nanoid(),
                text : action.payload //payload is object
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions //components me kam aaega

export default todoSlice.reducer //to be used in store