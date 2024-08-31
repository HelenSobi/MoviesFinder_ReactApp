import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBg = ({ movieId}) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector(store => store.movies?.movieTrailerVideo?.key);
  if (!trailerKey) return null;

  return (
      <>
        <iframe className="absolute top-0 left-0 w-full h-full" width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&loop=1&mute=1&controls=0&rel=0&showinfo=0&playlist=${trailerKey}&modestbranding=1`} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
      </>
  );
}

export default VideoBg;

{/* /* to get looping work: Add video ID another time as playlist value! *
        /* Overlay that darkens the video background  
        bug ******* check for small screen*/ }