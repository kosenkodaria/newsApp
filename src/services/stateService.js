import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    dataList: null,
    searchData: {},
}

export const setDataList = createAction('setDataList');
export const setSearchData = createAction('setSearchData');

const reducer = createReducer(initialState, {
    [setDataList]:(state, action) => {
        state.dataList = action.payload;
    },
    [setSearchData]:(state,action) => {
        state.searchData = action.payload;
    }
});

 export const store = configureStore({ reducer });