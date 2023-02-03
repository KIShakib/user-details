import { configureStore } from "@reduxjs/toolkit";
import toggleModeReducer from "../features/toggleMode/toggleModeSlice";
import usersReducer from "../features/user/usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        toggleMode: toggleModeReducer
    }
})

export default store;