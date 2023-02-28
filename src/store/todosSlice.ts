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

      const id = state.todos?.length !== 0 ? Math.min(...todos.map(todo => todo.id)) + 1 : 1

      console.log(action.payload, 'payload')
      console.log(todos, 'todos')

      if (title !== undefined && description !== undefined &&
        title.length !== 0 && description.length !== 0) {
        state.todos?.push(
          {
            id,
            title: action.payload.title,
            description: action.payload.description,
            status: false
          }
        )
      }
    }
  }
})

export const { addNewTodo } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos

export const todosActions = todosSlice.actions

export default todosSlice
