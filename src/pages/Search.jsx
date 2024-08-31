import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useSearchMovies from "../hooks/useSearchMovies";
import SliderCard from "../components/SliderCard";

const Search = () => {
  const param = useParams();
  useSearchMovies(param.searchText);
  const movies = useSelector((store) => store.search?.searchMovieList);

  return (
    <>
      <div className="p-4 relative">
        <h1 className="text-black text-lg md:text-2xl font-semibold leading-tight mb-4">
          Movies related to {param.searchText}
        </h1>

        {(!movies || !Array.isArray(movies) || movies.length === 0) ? (
          // Display this message when no movies are found
          <p className="text-lg text-black">No search results found</p>
        ) : (
          // Display movie grid when movies are available
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8">
            {movies.map((card) => (
              <SliderCard
                key={card.id}
                movieId={card.id}
                imageId={card.poster_path} // Use the poster path
                title={card.title}
                rel_date={card.release_date} // Display release date
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
