import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgencies = createAsyncThunk("cars/fetchCars", async () => {
    const res = await axios.get("/data.json");
    return res.data.travelAgency;
})

const agencySlice = createSlice({
    name: "agencies",
    initialState: {
        isLoading: false,
        agencies: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAgencies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAgencies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.agencies = action.payload;
            state.error = null;
        });
        builder.addCase(fetchAgencies.rejected, (state, action) => {
            state.isLoading = false;
            state.agencies = [];
            state.error = action.error.message;
        });
    }
})


export default agencySlice.reducer;