import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
