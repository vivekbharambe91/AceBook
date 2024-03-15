import { configureStore } from "@reduxjs/toolkit";
import  likefeedsSlice  from "./likeSlice";

const store = configureStore({
    reducer:{
        likeFeed: likefeedsSlice,
    }
});

export default store;