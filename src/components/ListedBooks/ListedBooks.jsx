import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetails } from "../../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";


const ListedBooks = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([])
    useEffect(() => {
        const storedBooksId = getStoredBookDetails();
        if (books.length > 0) {
            const bookList = books.filter(book => storedBooksId.includes(book.id))
            console.log(bookList)

            setListedBooks(bookList)
        }


    }, [])
    return (
        <div>
            <h2>Books: {listedBooks.length} </h2>
            <ul>
                {
                    listedBooks.map(book => <li key={book.id}>
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
                                <div></div>

                            </div>
                        </div>



                    </li>)
                }
            </ul>

        </div>
    );
};

export default ListedBooks;