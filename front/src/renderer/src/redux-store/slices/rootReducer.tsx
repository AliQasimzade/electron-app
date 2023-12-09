import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./userSlice";

const rootReducer: any = combineReducers({
    user: userSlice
});

export default rootReducer;