import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookDetails } from "../../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book)

    const handleReadButton = () => {
        saveBookDetails(idInt)

        // if(!saveBookDetails(id)){

        toast('Added to read successfully!')
        // }
        // else{
        //     toast('You have already added this one.')


        // }
    }

    const handleWishlist = () => {
        saveBookDetails(idInt)
        // if(!saveBookDetails(id)){
        //     toast('Added to wishlist successfully!')
        // }
        // else{

        toast('Already added to wishlist!')

        // }

    }
    return (
        <div className="lg:flex mt-10 gap-10">
            <div className="bg-[#1313130D] flex justify-center items-center py-14 rounded-lg drop-shadow-md flex-1"><img className="w-72 drop-shadow-lg" src={book.image} alt="" /></div>
            <div className="flex-1 space-y-5 flex flex-col justify-between h-full">
                <h1 className="font-bold text-4xl">{book.title}</h1>
                <p className="font-medium">By: {book.author}</p>
                <hr />
                <h5 className="font-medium">{book.category}</h5>
                <hr />
                <p><span className="font-bold">Review: </span>{book.review}</p>
                <div className="flex gap-4">
                    <p className="font-bold">Tag</p>
                    {
                        book.hashtags.map((tag, idx) => <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-2 py-1 rounded-2xl" key={idx}>#{tag}</span>)
                    }
                </div>
                <hr />
                <div className="flex gap-8">
                    <div className="space-y-3">
                        <p>Number of pages:</p>
                        <p>Publisher: </p>
                        <p>Year of publishing:</p>
                        <p>Rating:</p>

                    </div>
                    <div className="font-bold space-y-3">
                        <p>{book.pages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.publish_date}</p>
                        <p>{book.rating}</p>

                    </div>

                </div>
                <div className="">
                    <button className="bg-white border-2 px-4 py-3 rounded-lg font-semibold mr-5" onClick={handleReadButton}>Read</button>
                    <button className="bg-[#50B1C9] text-white font-semibold px-4 py-3 rounded-lg" onClick={handleWishlist}>Wishlist</button>
                </div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default BookDetails;