import { useEffect, useState } from "react";
import Book from "../Book/Book";


const AllBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="my-10">
            <h2 className="text-center font-bold text-4xl pb-10">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book = {book}></Book> )
                }
            </div>
            
        </div>
    );
};

export default AllBooks;