import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice ({
    name:"search",
    initialState : {
        searchMovieList : null,
    },
    reducers : {
        addSearchMovies(state,action){
            state.searchMovieList=action.payload;
        },
    }
})

export const {addSearchMovies} = searchSlice.actions;

export default searchSlice.reducer;