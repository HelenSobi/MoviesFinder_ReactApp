import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBg = ({ movieId}) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector(store => store.movies?.movieTrailerVideo?.key);
  if (!trailerKey) return null;

  return (
        <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
      
  );
}

export default VideoBg;

{/* /* to get looping work: Add video ID another time as playlist value! *
        /* Overlay that darkens the video background  
        bug ******* check for small screen*/ }