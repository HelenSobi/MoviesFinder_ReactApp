import { useParams } from 'react-router-dom';
import useMovieInfo from '../hooks/useMovieInfo';
import { useSelector } from 'react-redux';
import { MOVIE_IMG_URL } from '../constants/constants_img';
import Loader from '../utils/Loader';

const MovieMoreInfo = () => {
  const param = useParams();
  useMovieInfo(param.id); // Trigger data fetch
  const movieInfo = useSelector((store) => store.movies?.movieMoreInfo);
  console.log('Fetched Data:', movieInfo);  // Check what's stored in Redux
  // Conditional rendering based on the data type and presence
  if (!movieInfo || (Array.isArray(movieInfo) && movieInfo.length === 0)) {
    return <Loader />;
  }
  const { original_title, poster_path,release_date,vote_average,runtime,backdrop_path,genres,overview,} = movieInfo;
  const mgenre=genres;
    return (
        <>
      <section className="p-4 flex justify-center items-center">
        <div className="flex gap-8  w-full md:w-8/12 md:flex-row flex-col">
            <div className="">
            <img className="h-[300px] w-full md:w-[300px] object-fill md:object-contain" src={`${MOVIE_IMG_URL}${poster_path}`} alt={`${original_title}`} />
            </div>
            <div className="w-full">
                <h1 className="text-black text-lg md:text-3xl font-semibold leading-tight mb-4">
                    {original_title}
                 </h1>
                 <p className="text-md inline-block font-light bg-amber-400 rounded px-2 leading-loose text-black mb-4">
                    IMDB: {vote_average}
                    </p>
                 <p className="text-md text-justify font-light text-black mb-4">{overview}</p>
                 <div className="text-md">
                    {genres[0].name}{
                    mgenre.map((genre)=>{
                        <p className="text-md text-justify font-light text-black mb-4" key={genre.id}>
                        {genre.name} </p>
                      
                    })}</div>
                 <div className="flex">
                    <p className="text-lg font-light text-black mr-4 border border-zinc-400 rounded px-2">{release_date}</p>
                    <p className="text-lg font-light text-black mr-4 border border-zinc-400 rounded px-2">{runtime} mins</p>
                 </div>
            </div>
        </div>
        </section>
         
      </>
 )};

export default MovieMoreInfo;
