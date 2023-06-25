import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    dataList: null,
    searchData: {},
    errorMessage: null,
}

export const setDataList = createAction('setDataList');
export const setSearchData = createAction('setSearchData');
export const setErrorMessage = createAction('setErrorMessage');

const reducer = createReducer(initialState, {
    [setDataList]:(state, action) => {
        state.dataList = action.payload;
    },
    [setSearchData]:(state,action) => {
        state.searchData = action.payload;
    },
    [setErrorMessage]:(state,action) => {
        state.errorMessage = action.payload;
    }
});

 export const store = configureStore({ reducer });