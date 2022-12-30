import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/auth.reducer";

const store = configureStore({
    reducer: {
        auth: AuthReducer.reducer
    }
});

export default store;