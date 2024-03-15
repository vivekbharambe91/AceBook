import { createSlice } from "@reduxjs/toolkit";

const likefeedsSlice = createSlice({
    name: "likeFeed",
    initialState: false,
    reducers: {
        likeFeed(state, action) { },
    }
});
console.log("likefeedsSlice", likefeedsSlice.actions);
export default likefeedsSlice.reducer;