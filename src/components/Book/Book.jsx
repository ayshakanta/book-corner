import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const {id, image, hashtags, title, author, category, rating } = book;
    return (
        <div className="border-2 p-6 rounded-2xl drop-shadow-sm ">
            <Link to={`/book/${id}`} className="flex flex-col justify-between h-full space-y-5">
                <div className="bg-[#F3F3F3] flex items-center justify-center text-center py-8 rounded-2xl drop-shadow-md"><img className="w-40 drop-shadow-lg" src={image} alt="" /></div>
                <div className="text-[#23BE0A]  gap-3">
                    {
                        hashtags.map((tag, idx) => <span className="bg-[#23BE0A0D] px-2 py-1 rounded-2xl " key={idx}>{tag}</span>)
                    }
                </div>
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="font-semibold">By: {author}</p>
                <hr />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="flex gap-2 items-center justify-center">
                        <p>{rating}</p>
                        <div><CiStar></CiStar></div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;