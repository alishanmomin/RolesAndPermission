import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/signup";

export default configureStore({
    reducer: {
        register: registerReducer,
    },
});
