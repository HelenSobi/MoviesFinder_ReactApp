import {useSelector} from 'react-redux';
import SliderCard from './SliderCard';

const TrendingMovies = () => { 
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies || !Array.isArray(movies) || movies.length === 0) return null;
   
    return (
        <>
        <div className="py-4 relative p-4">
        <h1 className="text-black text-lg md:text-2xl font-semibold leading-tight mb-4">Trending Movies</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-10">
             {movies.map((card)=>(
                 <SliderCard key={card.id} movieId={card.id} imageId={card.poster_path} title={card.title} rel_date={card.release_date}/>
            ))}
        </div>
        </div>
        </>
    )
}

export default TrendingMovies;