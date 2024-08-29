import { MOVIE_IMG_URL } from '../constants/constants_img';
import useMinuteToHours from '../hooks/useMinuteToHours';

const MovieMoreInfo = (props) => {
    const {
        original_title,
        poster_path,
        release_date,
        vote_average,
        runtime,
        backdrop_path,
        genres,
        overview,
      } = props.movieInfo;
      const hours = useMinuteToHours(runtime);
  return (
    <>
      <section className="relative">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${MOVIE_IMG_URL}${backdrop_path})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-5"></div>
        
        <div className="relative p-4 flex justify-center items-center">
        
          {/* Use relative to keep content above the background image */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-10/12">
            {/* Poster Image */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <img
                className="h-[300px] w-full md:w-[300px] object-cover md:object-contain"
                src={`${MOVIE_IMG_URL}${poster_path}`}
                alt={`${original_title}`}
              />
            </div>

            {/* Movie Information */}
            <div className="w-full">
            
              <h1 className="text-black text-xl md:text-3xl font-semibold leading-tight mb-4">
                {original_title}
              </h1>
              <p className="text-md font-light bg-amber-400 rounded px-2 py-1 inline-block text-black mb-4">
                IMDB: {vote_average.toFixed(1)}
              </p>
              <p className="text-md text-justify font-light text-black mb-4">
                {overview}
              </p>
              <div className="text-md mb-4">
                {genres.map((item) => (
                  <span
                    key={item.id}
                    className="text-md font-normal text-black mr-2"
                  >
                    {item.name}
                    {item.id !== genres[genres.length - 1].id ? ',' : ''}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <p className="text-lg font-light text-black border border-zinc-400 rounded px-2">
                  {release_date}
                </p>
                <p className="text-lg font-light text-black border border-zinc-400 rounded px-2">
                  {hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MovieMoreInfo;
