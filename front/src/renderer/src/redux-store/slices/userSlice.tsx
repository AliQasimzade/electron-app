import { createSlice } from "@reduxjs/toolkit";


interface StateTypeForUser {
    user: {
        id: string
    } | null
}
export const initialState: StateTypeForUser = {
    user: null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state: StateTypeForUser, action: any) => {
            return {
                ...state,
                user: action.payload
            }
        }
    }
})


export const { getUser } = userSlice.actions

export default userSlice.reducer as any