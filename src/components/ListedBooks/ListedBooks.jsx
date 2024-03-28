import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetails } from "../../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineRestorePage } from "react-icons/md";
import BookDetails from "../BookDetails/BookDetails";


const ListedBooks = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([])
    const [displayBooks, setDisplayBooks] = useState([])

    const handleBooksFilter = filter =>{
        let sortedBooks = []
        if(filter === 'pages'){
            sortedBooks = listedBooks.slice().sort((a,b) =>b.pages - a.pages)
            
        }
        else if(filter === 'rating'){
            sortedBooks = listedBooks.slice().sort((a,b) => b.rating - a.rating)
        }
        else if(filter === 'publish_date'){
            sortedBooks = listedBooks.slice().sort((a,b) => b.publish_date - a.publish_date)
        }
        else{
            sortedBooks = listedBooks.slice()
        }
        setDisplayBooks(sortedBooks)
    }
    useEffect(() => {
        const storedBooksId = getStoredBookDetails();
        if (books.length > 0) {
            const bookList = books.filter(book => storedBooksId.includes(book.id))
            console.log(bookList)

            setListedBooks(bookList)
            setDisplayBooks(bookList)
        }


    }, [books])
    return (
        <div>
            <h2>Books: {listedBooks.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn">Sort by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                    <li onClick={() =>handleBooksFilter('pages')}><a>Number of pages</a></li>
                    <li onClick={() =>handleBooksFilter('publish_date')}><a>Published Year</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayBooks.map(book => <li key={book.id}>
                        <div>
                            <img src={book.image} alt="" />
                        </div>
                        <div>
                            <h2>{book.title}</h2>
                            <h4>By: {book.author}</h4>
                            <div className="flex gap-3">
                                <p>Tag
                                    {
                                        book.hashtags.map((tag, idx) => <span key={idx}>{tag}</span>)
                                    }
                                </p>
                                <div><CiLocationOn /></div>
                                <p>Year of publishing: {book.publish_date}</p>

                            </div>
                            <div>
                                <div>
                                    <div><GoPeople /></div>
                                    <p>Publisher: {book.publisher}</p>
                                </div>
                                <div>
                                    <div><MdOutlineRestorePage /></div>
                                    <p>Page {book.pages}</p>

                                </div>
                                <hr />
                                <div>
                                    <p>Category: {book.category}</p>
                                    <p>Rating: {book.rating}</p>
                                    <button onClick={BookDetails}>View Details</button>
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