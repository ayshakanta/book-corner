import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {id, image, hashtags, title, author, category, rating } = book;
    return (
        <div>
            <Link to={`/book/${id}`}>
                <div><img src={image} alt="" /></div>
                <div>
                    {
                        hashtags.map((tag, idx) => <span key={idx}>{tag}</span>)
                    }
                </div>
                <h2>{title}</h2>
                <p>{author}</p>
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

export default Book;