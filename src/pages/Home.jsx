
import VideoPlayer from "../components/VideoPlayer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrendingMovies from '../components/TrendingMovies';
const Home=()=>{
    useNowPlayingMovies();
    return (
       <>
       <VideoPlayer/>
       <TrendingMovies/>
       </>
    )
}

export default Home;