import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useSearchMovies from "../hooks/useSearchMovies";
import SliderCard from "../components/SliderCard";
const Search=()=>{
    const param = useParams();
    useSearchMovies(param.searchText)
    const movies = useSelector((store)=>store.search?.searchMovieList);
    console.log(movies)
    if(!movies || !Array.isArray(movies) || movies.length === 0) return null;
    return (
        <>
        <div className="p-4 relative">
        <h1 className="text-black text-lg md:text-2xl font-semibold leading-tight mb-4">Movies related to {param.searchText}</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-10">
        {movies.length === 0 && (<p className="text-lg text-black">No search results found</p>
        )}
        {movies.length > 0 &&
                movies.map((card) => (
                    <SliderCard
                        key={card.id}
                        movieId={card.id}
                        imageId={card.poster_path } // Fallback to a default image if `poster_path` is null
                        title={card.title}
                        rel_date={card.release_date} // Fallback text if `release_date` is null
                    />
                ))
        }

        </div>
        </div>
        </>
    )
}

export default Search;
