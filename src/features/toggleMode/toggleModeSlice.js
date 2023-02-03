import { createSlice } from "@reduxjs/toolkit";

export const toggleModeSlice = createSlice({
    name: "toggleMode",
    initialState: true,
    reducers: {
        toggleModeChange: state => {
            return state = !state
        }
    }
})

export const { toggleModeChange } = toggleModeSlice.actions;

export default toggleModeSlice.reducer;