import { useSelector } from "react-redux";
import VideoBg from "../components/VideoBg";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";

const VideoContainer = () => {
 
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies || !Array.isArray(movies) || movies.length === 0) return <Loader/>;
    const {id,title, overview}=movies[1];
    
    return (
        <>
        <section className="relative h-full xl:h-screen text-white overflow-hidden">
            <VideoBg movieId={id}/>
            {/* Gradient overlay with adjusted z-index to layer above the video */}
            <div className="absolute inset-0 bg-black sm:bg-transparent z-10"></div>
            {/* Content container with a higher z-index to be above the video */}
                <div className="relative z-40 flex justify-start flex-col p-4">
                <div className="h-full w-full md:w-6/12 xl:w-5/12">
                    <h1 className=" self-start text-2xl md:text-2xl font-semibold leading-tight mb-4">{title}</h1>
                    <p className=" self-start hidden md:block md:text-lg md:text-md text-gray-500 text-justify">{overview}</p>
                    
                    <div className="self-start mt-36 md:mt-8 inline-flex flex-wrap gap-4">
                    <Link to="#" className="rounded bg-red-600 px-6 md:px-12 py-2 text-lg font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">Trailer</Link>
                    <Link to={`/movie/${id}`} className="rounded bg-white px-6 md:px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">More Info</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default VideoContainer;