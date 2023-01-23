import { configureStore } from "@reduxjs/toolkit";
import agencyReducer from "../features/agency/agencySlice";

const store = configureStore({
    reducer: {
        agencies: agencyReducer,
    }
})

export default store;