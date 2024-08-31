import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../store/movieSlice";
import { API_OPTIONS ,UPCOMING_URL  } from "../constants/constants_api";

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchNowPlayingMoview();
    },[]);

    const fetchNowPlayingMoview=async()=>{    
        const data = await fetch(UPCOMING_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }
}

export default useUpcomingMovies;

