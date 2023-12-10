import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import themeSlice from "./themeSlice";

const rootReducer: any = combineReducers({
    user: userSlice,
    theme: themeSlice
});

export default rootReducer;