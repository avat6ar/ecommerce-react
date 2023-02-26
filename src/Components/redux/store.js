import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./CounterState";

const store = configureStore({
    reducer: {
        data: counterSlice,
    }
});

export default store;