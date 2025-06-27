import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: "tab",
    initialState:{
        activeTab: "landingPage",
        itemsearch: null,
        loading:false
    },
    reducers: {
        setActivetab: (state,action) => {
            state.activeTab = action.payload;
        },
        setItemSearch: (state, action) => {
            state.itemsearch = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }

})

export const { setActivetab } = tabSlice.actions;
export const {setItemSearch} = tabSlice.actions;
export const {setLoading} = tabSlice.actions;
export default tabSlice.reducer;