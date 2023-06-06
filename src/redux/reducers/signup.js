import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    email: "",
    password: "",
    role: "",
};

const register = createSlice({
    name: "register",
    initialState,
    reducers: {
        setName: (state, { payload }) =>
        {
            state.setName = payload.setName;
        },
        setEmail: (state, { payload }) =>
        {
            state.email = payload.email;
        },
        setPassword: (state, { payload }) =>
        {
            state.password = payload.password;
        },
        setRole: (state, { payload }) =>
        {
            state.roleId = payload.roleId;
        },

    },
});

export const {
    setName,
    setEmail,
    setPassword,
    setRole
} = register.actions;

export default register.reducer;