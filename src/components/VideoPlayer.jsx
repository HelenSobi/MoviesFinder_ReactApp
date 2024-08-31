import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";

const VideoPlayer = () => {

    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies || !Array.isArray(movies) || movies.length === 0) return <Loader/>;
    const {id,title, overview}=movies[1];
   

  return (
    <>
     <div className="relative pb-[56.25%] h-0">
      <VideoBg movieId={id}/>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center">
        {/* Text and Buttons Container */}
        <div className="w-full md:w-1/2 px-4 md:px-8">
          {/* Overlay Text */}
          {/* Buttons */}
          <h1 className=" text-2xl md:text-2xl text-white font-semibold leading-tight mb-4">{title}</h1>
          <p className=" hidden md:block md:text-lg md:text-md text-gray-500 text-justify">{overview}</p>
          <div className="space-x-4 flex mt-8">
         
            <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none">
              Trailer
            </Link>
            <Link to={`/movie/${id}`}  className="bg-white text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoPlayer;

