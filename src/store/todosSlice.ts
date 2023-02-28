import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

const initialState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state)
    }
    // addItemToCart: (state, action) => {
    //   if (state.products.some(el => el.id === action.payload.id)) {
    //     state.products.find(el => el.id === action.payload.id).quantity++
    //     state.products.find(el => el.id === action.payload.id).totalPrice = action.payload.price * state.products.find(el => el.id === action.payload.id).quantity
    //   } else {
    //     state.products.push(
    //       {
    //         id: action.payload.id,
    //         title: action.payload.title,
    //         price: action.payload.price,
    //         quantity: 1,
    //         totalPrice: action.payload.price
    //       }
    //     )
    //   }

    //   state.totalQuantity++
    // },

    // removeItemFromCart: (state, action) => {
    //   if (state.products.find(el => el.id === action.payload).quantity === 1) {
    //     state.products = state.products.filter(el => el.id !== action.payload)

    //     state.totalQuantity--
    //   } else {
    //     state.products.find(el => el.id === action.payload).quantity--
    //     state.products.find(el => el.id === action.payload).totalPrice = state.products.find(el => el.id === action.payload).price * state.products.find(el => el.id === action.payload).quantity

    //     state.totalQuantity--
    //   }
    // }
  }
})

export const { add } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos
// export const selectTotalQuantity = (state) => state.cart.totalQuantity

export const productsActions = todosSlice.actions

export default todosSlice
