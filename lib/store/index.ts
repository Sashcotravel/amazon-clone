import { configureStore } from '@reduxjs/toolkit'
import userReducer from "@/lib/store/reducers/userReduser";
import cartReducer from "@/lib/store/reducers/cartReducer";


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch