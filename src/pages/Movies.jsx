import NowPlayingSlider from "../components/NowPlayingSlider";
import PopularMoviesSlider from "../components/PopularMoviesSlider";
import TopRatedMoviesSlider from "../components/TopRatedMoviesSlider";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Movies=()=>{
    usePopularMovies();
    useTopRatedMovies();
    return (        
        <>
        <div className="">
        <NowPlayingSlider/>
        <PopularMoviesSlider/>
        <TopRatedMoviesSlider/>
        </div>
        </>
    )
}
export default Movies;
