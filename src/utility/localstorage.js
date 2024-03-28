const getStoredBookDetails = () =>{
    const storedBookDetails = localStorage.getItem('book-details')
    if(storedBookDetails){
        return JSON.parse(storedBookDetails)
    }
    return []
}

const saveBookDetails = id =>{
    const storedBookDetails = getStoredBookDetails()
    const exists = storedBookDetails.find(bookId => bookId === id);
    if(!exists){
        storedBookDetails.push(id);
        localStorage.setItem('book-details', JSON.stringify(storedBookDetails))
    }
}

export {getStoredBookDetails, saveBookDetails}