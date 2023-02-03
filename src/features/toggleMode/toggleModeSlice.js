import { createSlice } from "@reduxjs/toolkit";

const toggleModeSlice = createSlice({
    name: "toggleMode",
    initialState: false,
})

export default toggleModeSlice.reducer;