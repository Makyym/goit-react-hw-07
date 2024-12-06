import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        name: "",
    },
};

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, {payload}) => {
            state.filters.name = payload;
        },
    },
});

export const selectNameFilter = state => state.filter.filters.name;
export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;