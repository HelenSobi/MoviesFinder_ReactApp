import Slider from "react-slick";
import {useSelector} from 'react-redux';
import SliderCard from './SliderCard';
import settings from "../constants/constants_slider";
import Loader from "../utils/Loader";

const NowPlayingSlider = () => {
    
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies || !Array.isArray(movies) || movies.length === 0) return <Loader/>;
    return (
        <>
        <div className="py-4">
        <h1 className="text-black ml-4 text-lg md:text-2xl font-semibold leading-tight mb-4">Trending</h1>
        <div className="px-8">
        <Slider {...settings}>
            {movies.map((card)=>(
                <SliderCard key={card.id} movieId={card.id} imageId={card.poster_path} title={card.title} rel_date={card.release_date}/>
            ))}
        </Slider>
        </div>
        </div>
        </>
    )
}

export default NowPlayingSlider;