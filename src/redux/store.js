import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/signup";
import articlesReducers from "./reducers/articles";

export default configureStore({
    reducer: {
        register: registerReducer,
        articles: articlesReducers,
    },
});
