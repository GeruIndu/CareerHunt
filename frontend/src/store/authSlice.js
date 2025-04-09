import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        appliedJob: [],
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        setAppliedJob: (state, action) => {
            state.appliedJob = action.payload;
        },
    }
})

export const { setLoading, setAuthUser, setAppliedJob } = authSlice.actions;
export default authSlice;