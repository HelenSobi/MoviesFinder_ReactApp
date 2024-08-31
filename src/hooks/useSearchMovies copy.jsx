import { useEffect } from 'react';
import { API_OPTIONS, SEARCH_URL } from '../constants/constants_api';
import { useDispatch } from 'react-redux';
import { addSearchMovies } from '../store/searchSlice';

const useSearchMovies = (searchText) => {
  const dispatch = useDispatch();
  const fetchSearchData = async (searchText) => {
    try {
      const response = await fetch(`${SEARCH_URL}${searchText}`, API_OPTIONS);
      const json = await response.json();
      const filterData = json.results.filter((movie)=>movie.poster_path!==null);
      console.log(filterData);
      dispatch(addSearchMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };
  useEffect(() => {
    if (searchText) {
      fetchSearchData(searchText);
    }
  }, [searchText]);

};

export default useSearchMovies;
