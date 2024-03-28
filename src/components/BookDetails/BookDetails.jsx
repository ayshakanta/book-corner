import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book)

    const handleReadButton = () =>{
        toast('Added to read successfully!')
    }

    const handleWishlist = () =>{
        toast('Added to wishlist successfully!')
    }
    return (
        <div>
            <div><img src={book.image} alt="" /></div>
            <div>
                <h1>{book.title}</h1>
                <h5>{book.category}</h5>
                <br />
                <p><span>Review:</span>{book.review}</p>
                <div>
                    <p>Tag</p>
                    {
                        book.hashtags.map((tag, idx) => <span key={idx}>{tag}</span>)
                    }
                </div>
                <br />
                <div>
                    <p>Number of pages:    <span>{book.pages}</span></p>
                    <p>Publisher:          <span>{book.publisher}</span></p>
                    <p>Year of publishing: <span>{book.publish_date}</span></p>
                    <p>Rating:             <span>{book.rating}</span></p>       
                </div>
                <div>
                    <button onClick={handleReadButton}>Read</button>
                    <button onClick={handleWishlist}>Wishlist</button>
                </div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default BookDetails;