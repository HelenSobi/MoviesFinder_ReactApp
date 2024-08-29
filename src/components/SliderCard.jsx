import {MOVIE_IMG_URL} from '../constants/constants_img';
import useFormatDate from '../hooks/useFormatDate';
import { Link } from 'react-router-dom';

const SliderCard = ({movieId,imageId, title, rel_date}) => {
    const formattedDate = useFormatDate(rel_date);
    return (
        <>
            <div>
                <Link to={`/movie/${movieId}`}>
                <img src={`${MOVIE_IMG_URL}${imageId}`} alt={`${title}`}
                    className="rounded-lg"/></Link>
                <div className="">
                    <h3 className="text-sm font-bold text-gray-900 mt-2 truncate">{title}</h3>
                    <p className="text-gray-600 text-sm">{formattedDate}</p>
                </div>
            </div>
        </>
    )
}

export default SliderCard;