import VideoContainer from "../components/VideoContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrendingMovies from '../components/TrendingMovies';

const Browse = () => {
    useNowPlayingMovies();
    return (
        <>
        <VideoContainer/>
        <TrendingMovies/>
        </>
    )
}

export default Browse;