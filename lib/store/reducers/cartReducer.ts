import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import {User} from "@firebase/auth";


export interface CartType {
    id: string,
    title: string,
    image: string,
    price: number,
    rating: number,
}

export interface CartState {
    items: CartType[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartType>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<{id: string}>) => {
            let newBasket = [...state.items]
            const index = state.items.findIndex((item) =>
                item.id === action.payload.id)

            if(index !== -1){
                newBasket.splice(index, 1)
                state.items = newBasket
            } else {
                console.log('can not remove product')
            }
        }
    }
})

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItemsCount = (state: RootState) => state.cart.items.length

export const selectCartTotal = (state: RootState) => {
    const totalAmount = state.cart.items.reduce((total, item) => (total += item.price), 0)
    return totalAmount
}

export default cartSlice.reducer