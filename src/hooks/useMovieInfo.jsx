import { useEffect } from 'react';
import { API_OPTIONS, MOVIE_INFO } from '../constants/constants_api';
import { useDispatch } from 'react-redux';
import { addMovieMoreInfo } from '../store/movieSlice';

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieInfo = async (movieId) => {
    try {
      const response = await fetch(`${MOVIE_INFO}${movieId}?language=en-US`, API_OPTIONS);
      const json = await response.json();
      dispatch(addMovieMoreInfo(json));
    } catch (error) {
      console.error('Failed to fetch movie info:', error);
    }
  };
  useEffect(() => {
    if (movieId) {
      fetchMovieInfo(movieId);
    }
  }, [movieId, dispatch]); // Add movieId and dispatch to dependencies

};

export default useMovieInfo;
