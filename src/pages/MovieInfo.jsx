import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useMovieInfo from '../hooks/useMovieInfo';
import { useSelector } from 'react-redux';
import Loader from '../utils/Loader';
import NowPlayingSlider from '../components/NowPlayingSlider';
import MovieMoreInfo from '../components/MovieMoreInfo';

const MovieInfo = () => {
  const param = useParams();
  useMovieInfo(param.id); // Trigger data fetch
  const movieInfo = useSelector((store) => store.movies?.movieMoreInfo);
  // Scroll to the top of the page when component mounts
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [movieInfo]);
  // Conditional rendering based on if movies is null, undefined, or not an array
  if (!movieInfo || (Array.isArray(movieInfo) && movieInfo.length === 0)) {
    return <Loader />;
  }

  return (
    <>
     <MovieMoreInfo movieInfo={movieInfo}/>
      <section>
        <div className="p-4 flex justify-center items-center">
          <div className="w-full md:w-10/12"> 
            <NowPlayingSlider/>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
