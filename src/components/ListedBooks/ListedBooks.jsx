import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetails } from "../../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineRestorePage } from "react-icons/md";
import BookDetails from "../BookDetails/BookDetails";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([])
    const [displayBooks, setDisplayBooks] = useState([])



    const handleShowDetails = () => {
        return <BookDetails></BookDetails>
    }



    const handleBooksFilter = filter => {
        let sortedBooks = []
        if (filter === 'pages') {
            sortedBooks = listedBooks.slice().sort((a, b) => b.pages - a.pages)

        }
        else if (filter === 'rating') {
            sortedBooks = listedBooks.slice().sort((a, b) => b.rating - a.rating)
        }
        else if (filter === 'publish_date') {
            sortedBooks = listedBooks.slice().sort((a, b) => b.publish_date - a.publish_date)
        }
        else {
            sortedBooks = listedBooks.slice()
        }
        setDisplayBooks(sortedBooks)
    }
    useEffect(() => {
        const storedBooksId = getStoredBookDetails();
        if (books.length > 0) {
            const bookList = books.filter(book => storedBooksId.includes(book.id))
            // console.log(bookList)

            setListedBooks(bookList)
            setDisplayBooks(bookList)
        }


    }, [books])



    return (
        <div className="mt-10 space-y-8">
            <h2 className="font-bold text-3xl bg-[#1313130D] text-center items-center p-4 rounded-2xl">Books</h2>
            <div className="flex justify-center items-center text-center">
                <details className="dropdown  ">
                    <summary className="m-1 btn bg-[#23BE0A] text-white   ">Sort by <span><IoIosArrowDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter('publish_date')}><a>Published Year</a></li>

                    </ul>

                </details>
            </div>
            <ul>
                {
                    displayBooks.map(book => <li className="lg:flex gap-10 border-2 rounded-2xl items-center mb-6 drop-shadow-sm" key={book.id}>
                        <div className="bg-[#1313130D] rounded-2xl m-6 flex justify-center items-center text-center p-10 drop-shadow-md">
                            <img className=" w-36 drop-shadow-lg" src={book.image} alt="" />
                        </div>
                        <div className="space-y-6 p-3">
                            <h2 className="font-bold text-2xl">{book.title}</h2>
                            <h4 className="font-semibold">By: {book.author}</h4>
                            <div className="lg:flex gap-3">
                                <p className=""><span className="font-bold mr-3">Tag</span>
                                    {
                                        book.hashtags.map((tag, idx) => <span className="mr-1 lg:mr-2 text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-2xl" key={idx}>#{tag}</span>)
                                    }
                                </p>
                                <div className="flex gap-1 items-center">
                                    <div><CiLocationOn /></div>
                                    <p>Year of publishing: {book.publish_date}</p>
                                </div>

                            </div>
                            <div className="space-y-5">
                                <div className="lg:flex gap-6">
                                    <div className="flex gap-1 items-center">
                                        <div><GoPeople /></div>
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <div><MdOutlineRestorePage /></div>
                                        <p>Page {book.pages}</p>

                                    </div>
                                </div>
                                <hr />
                                <div className="lg:flex items-center text-center  space-y-2 gap-4">
                                    <p className="text-[#328EFF] bg-[#328EFF26] px-3 py-2 rounded-3xl">Category: {book.category}</p>
                                    <p className="text-[#FFAC33] bg-[#FFAC3326] px-3 py-2 rounded-3xl">Rating: {book.rating}</p>
                                    <button className="px-3 py-2 rounded-3xl text-white bg-[#23BE0A]" onClick={handleShowDetails}>View Details</button>
                                </div>

                            </div>
                        </div>



                    </li>)
                }
            </ul>

        </div>
    );
};

export default ListedBooks;