import { createSlice } from "@reduxjs/toolkit";
import { ArticleData } from "../../utils/ArticleData";

const initialState = {
    ArticleData
};

const articles = createSlice({
    name: "articles",
    initialState,
    reducers: {
        addArticle: (state, { payload }) =>
        {
            console.log("payload", payload)
            state.ArticleData = [...state.ArticleData, payload];
        },
        // updateArticle: (state, { payload }) =>
        // {
        //     state.ArticleData = [...state.ArticleData, payload.data];
        // },
        removeArticle: (state, { payload }) =>
        {
            const NewData = state.ArticleData.filter((item) => item.id !== payload);
            state.ArticleData = NewData
        },
    },
});

export const {
    addArticle,
    removeArticle
} = articles.actions;

export default articles.reducer;