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
        <NowPlayingSlider/>
        <PopularMoviesSlider/>
        <TopRatedMoviesSlider/>
        </>
    )
}
export default Movies;
