import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Hi ashu' }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            //  state.todos = state.todos.map((todo) => 
            //    todo.id === action.payload ?   : 
            // )
            console.log("State:", state);
            console.log("Action:", action);
        
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        },


    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
