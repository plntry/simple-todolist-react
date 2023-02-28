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

      console.log(action.payload, 'payload')
      console.log(state.todos, 'todos')

      if (title !== undefined && description !== undefined) {
        state.todos?.push(
          {
            id: 1,
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
