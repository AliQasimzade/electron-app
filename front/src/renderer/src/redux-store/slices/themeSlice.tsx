import { createSlice } from "@reduxjs/toolkit";
interface StateTypeForTheme {
    theme: string
}

export const initialState: StateTypeForTheme = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state: StateTypeForTheme, action) => {
            return {
                ...state,
                theme: action.payload
            }
        }
    }
});

export default themeSlice.reducer as any
export const { setTheme } = themeSlice.actions