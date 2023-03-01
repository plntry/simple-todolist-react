import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

const initialState: ITodos = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      const { title, description } = action.payload
      const todos = state.todos ? state.todos : []

      const id = todos.length !== 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1

      state.todos?.push(
        {
          id,
          title,
          description,
          status: false
        }
      )
    }
  }
})

export const { addNewTodo } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos

export const todosActions = todosSlice.actions

export default todosSlice
