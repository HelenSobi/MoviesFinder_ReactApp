import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        UpComingMovies:null,
        movieMoreInfo:null,
    },
    reducers:{
        addNowPlayMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
        },
        addMovieMoreInfo:(state,action)=>{
            state.movieMoreInfo=action.payload;
        }
    },
});

export const { addNowPlayMovies , addMovieTrailer , addPopularMovies , addTopRatedMovies , addUpComingMovies, addMovieMoreInfo}=movieSlice.actions;
export default movieSlice.reducer;