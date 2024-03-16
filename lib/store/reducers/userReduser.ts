import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import {User} from "@firebase/auth";



export interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInToAccount: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        signOutFromAccount: (state, action: PayloadAction<null>) => {
            state.user = null
        }
    }
})

export const {
    signInToAccount,
    signOutFromAccount
} = userReducer.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user

export default userReducer.reducer